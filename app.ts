import express from "express"
import { envConfig } from "./src/config/environment"
import route from "./src/routes"
import { boot } from "./src/boot/boot"


const app = express()

boot.startUtilities()

const port = envConfig.APP_PORT
app.use(express.json())
app.use("/api/v1",route)

app.listen(port,() => {
    console.log(`Service running on port : ${port}`);
})

export default app