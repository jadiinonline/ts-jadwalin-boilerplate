import {Request,Response} from "express"
import Joi, { ObjectSchema } from "joi"
import { validateSchema } from "../helper/validation_helper"
import { ResponseHandler } from "../helper/response_handler"
import { UserActivityService } from "../service/user_activity_service"
import { TransactionHistoryService } from "../service/transaction_history_service"


export class TransactionController {
    static async UpgradePremium(req:Request,res:Response) :Promise<any> {
        try {
            const validationSchema :ObjectSchema = Joi.object({
                userId : Joi.string().uuid().required(),
                purchaseTotal : Joi.number().required(),
                purchaseType : Joi.string().valid().required()
            })
            validateSchema(req.body,validationSchema)
            const upgradePremium = await TransactionHistoryService.createTransactionHistory(req.body)
            return ResponseHandler.responseOk(res,upgradePremium,200)
        } catch (error) {
            return ResponseHandler.responseError(res,error as Error,400)
        }
        
    }
}