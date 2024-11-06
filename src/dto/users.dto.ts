export interface UserAttribute {
    id : string,
    email : string
    password : string
    passwordSalt : string
    verifiedUser : boolean
    premiumUser : boolean
    totalQuota : number
    unlimitedQuota : boolean
}
