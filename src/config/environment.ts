interface IEnvironment {
    DATABASE_URL : string | undefined
    APP_PORT : string | undefined
    KEY_SECRET : string | undefined
    JWT_SECRET : string | undefined
}

export const envConfig :IEnvironment = {
    APP_PORT : process.env.APP_PORT,
    DATABASE_URL : process.env.DATABASE_URL,
    KEY_SECRET : process.env.KEY_SECRET,
    JWT_SECRET : process.env.JWT_SECRET
}