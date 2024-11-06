import * as jwt from "jsonwebtoken"
import { envConfig } from "../config/environment"

export interface TokenPayload extends jwt.JwtPayload {
    email : string
}


export class JwtHelper {
    static generateToken(payload : TokenPayload){
        const generatedToken = jwt.sign(payload,envConfig.JWT_SECRET!,{expiresIn : '1d'})
        return generatedToken
    }

    static validateToken(token : string) :TokenPayload {
        try {
            const verifiyToken = jwt.verify(token,envConfig.JWT_SECRET!)
            return verifiyToken as TokenPayload
        } catch (error) {
            throw error
        }
    }
}