
export class AuthMiddleware {
    // static async isAuthenticated(req: Request, res: Response, next: NextFunction) :Promise<any> {
    //     try {
    //         if (req.headers["authorization"] == null) {
    //             throw new CustomException("invalidToken()", "Token Header Cannot Be Nullable !", 401)
    //         }
    //         const token = req.headers["authorization"]?.split("Bearer")[1].trim()
    //         const validateToken = JwtHelper.validateToken(token!)
    //         if(validateToken){
    //             const findUser = await UsersRepo.findUser({
    //                 email : validateToken.email
    //             })
    //             if(findUser == null){
    //                 throw new CustomException("invalidToken()", "Invalid Token !", 401)
    //             }
    //             req.body.loggedInUser = findUser.id
    //             return next()
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         const err = error as Error
    //         return ResponseHandler.responseError(res,err,401)
    //     }


    // }
}