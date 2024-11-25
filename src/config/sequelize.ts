import {Sequelize} from "sequelize"
import { envConfig } from "./environment";


const sequelize = new Sequelize(envConfig.DB_NAME!, envConfig.DB_USER!, envConfig.DB_PASS, {
    host: envConfig.DB_HOST,
    dialect: "postgres"
  });


export async function initDB() {
    try {
        await sequelize.authenticate()
        console.log("Success connected to database with sequelize ORM")
    } catch (error) {
        console.log("ERROR sequelize :",error)
    }
}

export default sequelize