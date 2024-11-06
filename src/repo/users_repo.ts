import { prisma } from "../config/prisma";
import { UserAttribute } from "../dto/users.dto";


export class UsersRepo {
    static async createUser(payload :Partial<UserAttribute>) {
        return await prisma.$transaction([
            prisma.users.create({
                data : {
                    email : payload.email,
                    password : payload.password,
                    password_salt : payload.passwordSalt,
                    premium_user : payload.premiumUser,
                    verified_user : payload.verifiedUser,
                    unlimited_quota : payload.unlimitedQuota,
                    total_quota : payload.totalQuota
                }
            })
        ])   
    }

    static async updateUser(userId : string,payload :Partial<UserAttribute>) {
        return await prisma.$transaction([
            prisma.users.update({
                where : {
                    id :userId
                },
                data : {
                    email : payload.email,
                    password : payload.password,
                    password_salt : payload.passwordSalt,
                    premium_user : payload.premiumUser,
                    verified_user : payload.verifiedUser,
                    unlimited_quota : payload.unlimitedQuota
                }
            })
        ])   
    }

    static async findUser(condition : Partial<UserAttribute>) {
        return await prisma.users.findFirst({
            where : condition
        })
    }
}