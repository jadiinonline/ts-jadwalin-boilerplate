import express from "express"
import { testController } from "../controllers/test_controller"

const route = express.Router()

route.get("/test",testController.test)


export default route