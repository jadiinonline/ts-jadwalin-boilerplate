interface IEnvironment {
    DB_NAME : string | undefined
    DB_PORT : string | undefined
    DB_HOST : string | undefined
    DB_USER : string | undefined
    DB_PASS : string | undefined
    APP_PORT : string | undefined
    KEY_SECRET : string | undefined
    JWT_SECRET : string | undefined
}

export const envConfig :IEnvironment = {
    APP_PORT : process.env.APP_PORT,
    DB_HOST : process.env.DD_HOST,
    DB_NAME : process.env.DB_NAME,
    DB_PASS : process.env.DB_PASS,
    DB_PORT : process.env.DB_PORT,
    DB_USER : process.env.DB_USER,
    KEY_SECRET : process.env.KEY_SECRET,
    JWT_SECRET : process.env.JWT_SECRET
}