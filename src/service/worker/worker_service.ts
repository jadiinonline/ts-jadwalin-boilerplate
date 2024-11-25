import {CronJob} from "cron"

export class WorkerService {
    static async deleteActivity() {
        console.log("WORKER RUNNING")
        // try {
        //     const job = new CronJob('0 00 00 * * *',async () => {
        //         await UserActivityService.resetActivity()
        //     },
        //     null,
        //     true,
        //     "Asia/Jakarta"
        //     )
        //     job.start()
        // } catch (error) {
        //     console.log("WORKER ERROR")
        // }
        
    }
}