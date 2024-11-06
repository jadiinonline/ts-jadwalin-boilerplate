import {Request,Response} from "express"
import Joi, { ObjectSchema } from "joi"
import { validateSchema } from "../helper/validation_helper"
import { ResponseHandler } from "../helper/response_handler"
import { UserActivityService } from "../service/user_activity_service"


export class MatchUpController {
    static async userMatchUp(req:Request,res:Response) :Promise<any> {
        try {
            const validationSchema :ObjectSchema = Joi.object({
                userLoggedIn : Joi.string().uuid().required(),
                userInteract : Joi.string().uuid().required(),
                activityType : Joi.string().valid().required()
            })
            validateSchema(req.body,validationSchema)
            const userActivity = await UserActivityService.createActivity(req.body)
            return ResponseHandler.responseOk(res,userActivity,200)
        } catch (error) {
            return ResponseHandler.responseError(res,error as Error,400)
        }
        
    }

}