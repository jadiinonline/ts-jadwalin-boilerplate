import { prisma } from "../config/prisma";
import { UserPhotoVideoAttribute } from "../dto/user_photo_video.dto";


export class UserPhotoVideoRepo {
    static async createContentUser(payload :Partial<UserPhotoVideoAttribute>) {
        return await prisma.$transaction([
            prisma.user_photo_videos.create({
                data : {
                    user_id : payload.userId,
                    content_type : payload.contentType,
                    set_as_preview : payload.setAsPreview,
                    url_content : payload.urlContent
                }
            })
        ])   
    }

    static async updateContentUser(id: string,payload :UserPhotoVideoAttribute) {
        return await prisma.$transaction([
            prisma.user_photo_videos.update({
                where : {
                    id :id
                },
                data : {
                    user_id : payload.userId,
                    content_type : payload.contentType,
                    set_as_preview : payload.setAsPreview,
                    url_content : payload.urlContent
                }
            })
        ])   
    }

    static async findContentUser(condition : Partial<UserPhotoVideoAttribute>) {
        return await prisma.user_photo_videos.findFirst({
            where : condition
        })
    }
}