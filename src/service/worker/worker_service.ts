import {CronJob} from "cron"
import { UserActivityRepo } from "../../repo/user_activity_repo"
import { UserActivityService } from "../user_activity_service"

export class WorkerService {
    static async deleteActivity() {
        console.log("WORKER RUNNING")
        try {
            const job = new CronJob('0 00 00 * * *',async () => {
                await UserActivityService.resetActivity()
            },
            null,
            true,
            "Asia/Jakarta"
            )
            job.start()
        } catch (error) {
            console.log("WORKER ERROR")
        }
        
    }
}