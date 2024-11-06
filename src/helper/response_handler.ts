import {Response} from "express"

interface ResponseStructure {
    message : "SUCCESS" | "FAILED"
    code : number
    data : any
}

export class ResponseHandler {
    static responseOk(res:Response,data : any,customStatusCode :number = 200) {
        const responseBody :ResponseStructure = {
            code : customStatusCode,
            data : data,
            message : "SUCCESS"
        }
        return res.status(customStatusCode).json(responseBody)
    }
    static responseError(res:Response,data : Error,customStatusCode :number = 500){
        const responseBody :ResponseStructure = {
            code : customStatusCode,
            data : data.message,
            message : "FAILED"
        }
        return res.status(customStatusCode).json(responseBody)
    }
}