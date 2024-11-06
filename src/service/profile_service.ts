import { ProfileAttribute } from "../dto/profile.dto";
import { GetAllProfileAttribute, UserPhotoVideoAttribute } from "../dto/user_photo_video.dto";
import { ProfileRepo } from "../repo/profile_repo";
import { UserActivityRepo } from "../repo/user_activity_repo";
import { UserPhotoVideoRepo } from "../repo/user_photo_video_repo";
import { UsersRepo } from "../repo/users_repo";
import { CustomException } from "../utilities/custom_exception";

export class ProfileService {
    static async createProfileService(payload : ProfileAttribute) {
        try {
            const findExistsUser = await UsersRepo.findUser({
                id : payload.userId
            })
            if(findExistsUser == null) {
                throw new CustomException("notFoundUser()","Not Found User !",400)
            }else {
                const createdProfile = await ProfileRepo.createProfile({
                    userId : findExistsUser.id,
                    bio : payload.bio,
                    education : payload.education,
                    gender : payload.gender,
                    hometown : payload.hometown,
                    location : payload.location,
                    profilePicture : payload.profilePicture,
                    work : payload.work,
                    fullname : payload.fullname
                })
                return createdProfile
            }
        } catch (error) {
            throw error
        }
        
    }

    static async updateProfileService(id: string,payload : ProfileAttribute) {
        try {
            const findProfile = await ProfileRepo.findProfile({
                id : id
            }) 
            const findExistsUser = await UsersRepo.findUser({
                id : payload.userId
            })
            console.log(findProfile)
            console.log(findExistsUser)
            if(findExistsUser == null || findProfile == null) {
                throw new CustomException("notFoundUser()","Not Found User !",400)
            }else {
                const createdProfile = await ProfileRepo.updateProfile({
                    id : findProfile.id,
                    userId : findExistsUser.id,
                    bio : payload.bio,
                    education : payload.education,
                    gender : payload.gender,
                    hometown : payload.hometown,
                    location : payload.location,
                    work : payload.work,
                    profilePicture : payload.profilePicture
                })
                return createdProfile
            }
        } catch (error) {
            throw error
        }
        
    }

    static async uploadContent(payload : UserPhotoVideoAttribute) {
        try {
            const createdContent = await UserPhotoVideoRepo.createContentUser({
                userId : payload.userId,
                contentType : payload.contentType,
                urlContent : payload.urlContent,
                setAsPreview : payload.setAsPreview
            })
            return createdContent
        } catch (error) {
            throw error
        }
    }

    static async getAllProfile(payload : GetAllProfileAttribute) {
        const findLogUser = await UserActivityRepo.findLogActivityUser(payload.userLoggedIn)
        const mapUserId = findLogUser.map((d) => d.user_interact) as string[]
        const getAllProfileExceptInLog = await ProfileRepo.getAllProfileExceptInLog(mapUserId,payload.skip,payload.take)
        return getAllProfileExceptInLog
    }
}