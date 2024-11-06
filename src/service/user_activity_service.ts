import { UsersActivityAttribute } from "../dto/activity_user.dto";
import { UserActivityRepo } from "../repo/user_activity_repo";
import { UsersRepo } from "../repo/users_repo";
import { CustomException } from "../utilities/custom_exception";

export class UserActivityService {
    static async createActivity(payload: UsersActivityAttribute) {
        try {
            const checkQuota = await UsersRepo.findUser({
                id: payload.userLoggedIn
            })
            const checkExistInteract = await UserActivityRepo.findInteractedUser(payload.userLoggedIn, payload.userInteract)
            if (checkExistInteract != null) {
                throw new CustomException("cannotMultipleInteract()", "Can't Multiple Interacted With Same User", 400)
            }
            if (Number(checkQuota?.total_quota) <= 0) {
                throw new CustomException("limitExceeded()", "Daily limit exceed !", 400)
            } else {
                const createActivity = await UserActivityRepo.createActivity({
                    userLoggedIn: payload.userLoggedIn,
                    activityType: payload.activityType,
                    userInteract: payload.userInteract
                })

                return createActivity
            }


        } catch (error) {
            throw error
        }

    }

    static async resetActivity() {
        try {
            console.log("Prepare to reset activity")
            await UserActivityRepo.deleteActivity()
            console.log("success to reset activity");
        } catch (error) {
            console.log(error)
        }


    }
}