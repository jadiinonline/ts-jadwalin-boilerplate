import {IConfig,DialectPostgres,ModelBuilder} from "sequelize-typescript-generator"
import { envConfig } from "../../src/config/environment";

(async () => {
    const config: IConfig = {
        connection: {
            dialect: 'postgres',
            database: envConfig.DB_NAME,
            username: envConfig.DB_USER,
            password: envConfig.DB_PASS,
            host : envConfig.DB_HOST,
            port : Number(envConfig.DB_PORT)
        },
        metadata: {
            indices: true,
            case: 'CAMEL',
            timestamps : true
        },
        output: {
            clean: true,
            outDir: __dirname + "/../../src/models/public"
        },
        strict: true,
    };

    const dialect = new DialectPostgres();

    const builder = new ModelBuilder(config, dialect);

    try {
        await builder.build();
        console.log("Success Generated Models !")
    }
    catch(err) {
        console.error("Error Generated Model : ",err);
        process.exit(1);
    }    
})();