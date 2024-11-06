export interface ProfileAttribute {
    id : string,
    fullname : string
    userId : string
    profilePicture : string
    bio : string
    work : string
    education : string
    gender : "MALE" | "FEMALE",
    location : string
    hometown : string
}