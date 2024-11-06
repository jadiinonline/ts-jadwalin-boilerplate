import { prisma } from "../config/prisma";
import { UsersActivityAttribute } from "../dto/activity_user.dto";
import { UsersRepo } from "./users_repo";

export class UserActivityRepo {
    static async createActivity(activityData :Partial<UsersActivityAttribute>) {
        const currentQuota = await UsersRepo.findUser({
            id : activityData.userLoggedIn
        })
        return await prisma.$transaction([
            prisma.users_activity.create({
                data : {
                    user_logged_in : activityData.userLoggedIn,
                    user_interact : activityData.userInteract,
                    activity_type : activityData.activityType
                }
            }),
            // decrease quota very user has new activity
            prisma.users.update({
                where : {
                    id : activityData.userLoggedIn
                },
                data : {
                    total_quota : Number(currentQuota?.total_quota) - 1
                }
            })
        ]) 
    }

    static async findInteractedUser(userLoggedIn : string,userInteractId : string) {
        return await prisma.users_activity.findFirst({
            where : {
                user_logged_in : userLoggedIn,
                user_interact : userInteractId
            }
        })
    }
    static async findLogActivityUser(userLoggedIn : string) {
        return await prisma.users_activity.findMany({
            where : {
                user_logged_in : userLoggedIn
            }
        })
    }

    static async deleteActivity() {
        return await prisma.users_activity.deleteMany()
    }
}