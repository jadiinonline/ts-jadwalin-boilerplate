export enum ActivityTypeEnum {
    PASS="PASS",
    LIKED="LIKED"
}

export interface UsersActivityAttribute {
    userLoggedIn : string
    userInteract : string
    activityType : ActivityTypeEnum
}