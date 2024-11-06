import {Request,Response} from "express"
import Joi, {ObjectSchema} from "joi"
import { validateSchema } from "../helper/validation_helper"
import { ResponseHandler } from "../helper/response_handler"
import { ProfileService } from "../service/profile_service"

export class ProfileController {
    static async createProfile(req:Request,res:Response) :Promise<any> {
        try {
            const requestSchema :ObjectSchema = Joi.object({
                userId : Joi.string().uuid().required(),
                fullname : Joi.string().required(),
                profilePicture : Joi.string().optional(),
                bio : Joi.string().optional(),
                work : Joi.string().optional(),
                education : Joi.string().optional(),
                gender : Joi.string().valid("MALE","FEMALE").required(),
                location : Joi.string().optional()
            })
            validateSchema(req.body,requestSchema)
            const createProfile = await ProfileService.createProfileService(req.body)
            return ResponseHandler.responseOk(res,createProfile,201)
        } catch (error) {
            return ResponseHandler.responseError(res,error as Error,400)
        }
        
    }

    static async updateProfilee(req:Request,res:Response) :Promise<any> {
        try {
            const requestSchema :ObjectSchema = Joi.object({
                id : Joi.string().uuid().required(),
                profilePicture : Joi.string().optional(),
                bio : Joi.string().optional(),
                work : Joi.string().optional(),
                education : Joi.string().optional(),
                gender : Joi.string().valid("MALE","FEMALE").required(),
                location : Joi.string().optional()
            })
            validateSchema({...req.params,...req.body},requestSchema)
            const createProfile = await ProfileService.updateProfileService(req.params.id,req.body)
            return ResponseHandler.responseOk(res,createProfile,200)
        } catch (error) {
            return ResponseHandler.responseError(res,error as Error,400)
        }   
    }

    static async uploadContent(req:Request,res:Response) :Promise<any> {
        try {
            const requestSchema :ObjectSchema = Joi.object({
                userId : Joi.string().uuid().required(),
                urlContent : Joi.string().required(),
                contentType : Joi.string().valid(["PHOTO","VIDEO"]).required(),
                setAsPreview : Joi.boolean().optional().default(false)
            })
            validateSchema(req.body,requestSchema)
            const createProfile = await ProfileService.uploadContent(req.body)
            return ResponseHandler.responseOk(res,createProfile,200)
        } catch (error) {
            return ResponseHandler.responseError(res,error as Error,400)
        }  
    }

    static async getAllProfile(req:Request,res:Response) :Promise<any> {
        try {
            const validationSchema :ObjectSchema = Joi.object({
                take : Joi.number().required(),
                skip : Joi.number().required()
            })
            validateSchema({...req.body,...req.query},validationSchema)
            const getAllProfile = await ProfileService.getAllProfile({...req.body,...req.query})
            return ResponseHandler.responseOk(res,getAllProfile,200)
        } catch (error) {
            return ResponseHandler.responseError(res,error as Error,400)
        }  
    }

}