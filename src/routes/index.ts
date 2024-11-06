import express from "express"
import { UserController } from "../controllers/users_controller"
import { ProfileController } from "../controllers/profile_controller"
import { MatchUpController } from "../controllers/match_up_controller"
import { TransactionController } from "../controllers/transaction_controller"
import { AuthMiddleware } from "../helper/auth_middleware"

const route = express.Router()

route.get("/test",(req,res) => {
    res.send("hello")
})

route.post("/users/register",UserController.registerUser)
route.post("/users/login",UserController.loginUser)
route.post("/user/profile/create",ProfileController.createProfile)
route.put("/user/profile/update/:id",ProfileController.updateProfilee)
route.post("/user/profile-content/create",ProfileController.uploadContent)
route.post("/user/match-up",(req,res,next) => AuthMiddleware.isAuthenticated(req,res,next),MatchUpController.userMatchUp)
route.post("/user/upgrade-premium",TransactionController.UpgradePremium)
route.get("/profile/all",(req,res,next) => AuthMiddleware.isAuthenticated(req,res,next),ProfileController.getAllProfile)


export default route