import {Request,Response} from "express"
import Joi, {ObjectSchema} from "joi"
import { validateSchema } from "../helper/validation_helper"
import { UsersService } from "../service/users_service"
import { ResponseHandler } from "../helper/response_handler"

export class UserController {
    static async registerUser(req:Request,res:Response) :Promise<any> {
        try {
            const requestSchema :ObjectSchema = Joi.object({
                email : Joi.string().email().required(),
                password : Joi.string().min(8).required()
            })
            validateSchema(req.body,requestSchema)
            const userRegister = await UsersService.registerUserService(req.body)
            return ResponseHandler.responseOk(res,userRegister,201)
        } catch (error) {
            return ResponseHandler.responseError(res,error as Error,400)
        }
        
    }

    static async loginUser(req:Request,res:Response) :Promise<any> {
        try {
            const requestSchema :ObjectSchema = Joi.object({
                email : Joi.string().email().required(),
                password : Joi.string().min(8).required()
            })
            validateSchema(req.body,requestSchema)
            const userLogin = await UsersService.login(req.body)
            return ResponseHandler.responseOk(res,userLogin,200)
        } catch (error) {
            return ResponseHandler.responseError(res,error as Error,400)
        }
        
    }
}