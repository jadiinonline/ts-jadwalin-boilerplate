import { prisma } from "../config/prisma";
import { TransactionHistoryAttribute } from "../dto/transaction_history.dto";

export class TransactionHistoryRepo {
    static async createTransactionHistory(payload : TransactionHistoryAttribute) {
        return await prisma.$transaction([
            prisma.transaction_history.create({
                data : {
                    user_id : payload.userId,
                    purchase_total : payload.purchaseTotal,
                    purchase_type : payload.purchaseType
                }
            })
        ]) 
    }
}