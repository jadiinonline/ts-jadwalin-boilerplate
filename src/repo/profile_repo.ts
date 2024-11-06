import { prisma } from "../config/prisma";
import { ProfileAttribute } from "../dto/profile.dto";

export class ProfileRepo {
    static async createProfile(profileData :Partial<ProfileAttribute>) {
        return await prisma.$transaction([
            prisma.user_profile.create({
                data : {
                    user_id : profileData.userId,
                    education : profileData.education,
                    bio : profileData.bio,
                    gender : profileData.gender,
                    hometown : profileData.hometown,
                    location : profileData.location,
                    profile_picture : profileData.profilePicture,
                    work : profileData.work,
                    fullname : profileData.fullname
                }
            })
        ]) 
    }

    static async updateProfile(profileData :Partial<ProfileAttribute>) {
        return await prisma.$transaction([
            prisma.user_profile.update({
                where : {
                    id : profileData.id
                },
                data : {
                    education : profileData.education,
                    bio : profileData.bio,
                    gender : profileData.gender,
                    hometown : profileData.hometown,
                    location : profileData.location,
                    profile_picture : profileData.profilePicture,
                    work : profileData.work
                }
            })
        ]) 
    }

    static async findProfile(condition : Partial<ProfileAttribute>) {
        return await prisma.user_profile.findFirst({
            where : condition
        })
    }

    static async getAllProfileExceptInLog(userId :string[],skip:number,take:number) {
        return await prisma.user_profile.findMany({
            where : {
                user_id : {
                    notIn : userId
                }
            },
            take : Number(take),
            skip : Number(skip)
        })
    }
}