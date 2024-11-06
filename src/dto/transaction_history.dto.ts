export enum PurchaseTypeEnum {
    VERIFIED_PROFILE="VERIFIED_PROFILE",
    UNLIMITED_QUOTA="UNLIMITED_QUOTA"
}

export interface TransactionHistoryAttribute {
    userId : string
    purchaseTotal : number
    purchaseType : PurchaseTypeEnum
}