import express from "express"
import { envConfig } from "./src/config/environment"
import route from "./src/routes"
import { initPrismaClient } from "./src/config/prisma"
import { WorkerService } from "./src/service/worker/worker_service"


const app = express()

const port = envConfig.APP_PORT
app.use(express.json())
app.use("/api/v1",route)

initPrismaClient()
WorkerService.deleteActivity()
app.listen(port,() => {
    console.log(`Service running on port : ${port}`);
})

export default app