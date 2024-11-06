import { ObjectSchema } from "joi";
import { CustomException } from "../utilities/custom_exception";

export function validateSchema(payload:any,schema :ObjectSchema) :void {
    const validate  = schema.validate(payload,{allowUnknown : true})
    if(validate.error){
        throw new CustomException("JoiValidation",validate.error.message,400)
    }
}