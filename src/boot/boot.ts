import { initDB } from "../config/sequelize";
import { WorkerService } from "../service/worker/worker_service";

class Boot {
    async startUtilities() {
        Promise.all([
            await initDB(),
            await WorkerService.deleteActivity()
        ])
        // added utilities here ex : rabbitmq, mongo,etc
    }
}

export const boot = new Boot()