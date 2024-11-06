import { PurchaseTypeEnum, TransactionHistoryAttribute } from "../dto/transaction_history.dto";
import { TransactionHistoryRepo } from "../repo/transaction_history_repo";
import { UsersRepo } from "../repo/users_repo";

export class TransactionHistoryService {
    static async createTransactionHistory(payload : TransactionHistoryAttribute) {
        try {
            const createTrxHistory = await TransactionHistoryRepo.createTransactionHistory({
                purchaseTotal : payload.purchaseTotal,
                purchaseType : payload.purchaseType,
                userId : payload.userId
            })
            if(createTrxHistory != null){
                if(payload.purchaseType == PurchaseTypeEnum.VERIFIED_PROFILE){
                    await UsersRepo.updateUser(payload.userId,{
                        premiumUser : true
                    })
                }else if (payload.purchaseType == PurchaseTypeEnum.UNLIMITED_QUOTA){
                    await UsersRepo.updateUser(payload.userId,{
                        unlimitedQuota : true
                    })
                }
            }
            return createTrxHistory
        } catch (error) {
            throw error
        }
    }
}