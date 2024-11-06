import { UserAttribute } from "../dto/users.dto";
import { UsersRepo } from "../repo/users_repo";
import { passwordHelper } from "../utilities/hash";
import {CustomException} from "../utilities/custom_exception"
import { JwtHelper } from "../utilities/jwt";

export class UsersService {
    static async registerUserService(payload : Partial<UserAttribute>) {
        const saltedPassword = passwordHelper.generateSalt()
        const hashedPassword = passwordHelper.generateSaltedHash(payload.password!,saltedPassword)
        const findExistingUser = await UsersRepo.findUser({
            email : payload.email!
        })
        if(findExistingUser != null){
            throw new CustomException("DuplicateUser","User Already Exists",400)
        } 
        try {
            const registerUser = await UsersRepo.createUser({
                email : payload.email!,
                password : hashedPassword,
                passwordSalt : saltedPassword,
                premiumUser : false, // default is false,
                totalQuota : 10,
                verifiedUser : false,
                unlimitedQuota : false
            })
            return {}
        } catch (error) {
            throw error
        }
    }

    static async login(payload : Partial<UserAttribute>) {
        try {
            const findExistingUser = await UsersRepo.findUser({
                email : payload.email!
            })
            if(findExistingUser == null){
                throw new CustomException("DuplicateUser","Email / Password invalid Combination",400)
            } 
            const hashedPassword = passwordHelper.generateSaltedHash(payload.password!,findExistingUser.password_salt!)
            const comparedPassword = passwordHelper.compareHash(payload.password!,findExistingUser.password_salt!,hashedPassword)
            if(comparedPassword){
                const generatedToken = JwtHelper.generateToken({
                    email : payload.email!
                })
    
                return {
                    token : generatedToken
                }
            }else {
                throw new CustomException("invalidUser","Email / Password invalid Combination",400)
            }
        } catch (error) {
            throw error
        }
    }
} 