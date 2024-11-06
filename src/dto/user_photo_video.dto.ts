
export enum ContentTypeEnum {
    PHOTO= "PHOTO",
    VIDEO = "VIDEO"
}

export interface UserPhotoVideoAttribute {
    id : string
    userId : string
    contentType : ContentTypeEnum
    setAsPreview : boolean
    urlContent : string
}

export interface GetAllProfileAttribute {
    userLoggedIn : string
    skip : number
    take : number
}