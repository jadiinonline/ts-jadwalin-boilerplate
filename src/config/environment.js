"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfig = void 0;
exports.envConfig = {
    APP_PORT: process.env.APP_PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    KEY_SECRET: process.env.KEY_SECRET,
    JWT_SECRET: process.env.JWT_SECRET
};
