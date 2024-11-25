import Joi, { Err, ObjectSchema } from "joi";
import { validateSchema } from "../helper/validation_helper";
import {Request,Response} from "express"
import { exampleService } from "../service/example_service";
import { ResponseHandler } from "../helper/response_handler";

class TestController {
    async test(req:Request,res:Response) :Promise<any> {
        const validSchema :ObjectSchema = Joi.object({
            test : Joi.string().required()
        })
        validateSchema({...req.body,...req.query},validSchema)
        const test = exampleService.test()
        try {
            return ResponseHandler.responseOk(res,test,200)
        } catch (error) {
            return ResponseHandler.responseError(res,error as Error,500)
        }
    }
}

export const testController = new TestController()