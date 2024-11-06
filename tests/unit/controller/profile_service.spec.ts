import { assert, expect } from "chai"
import * as sinon from "sinon"
import * as httpMock from "node-mocks-http"
import { UsersService } from "../../../src/service/users_service"
import { UserController } from "../../../src/controllers/users_controller"
import { CustomException } from "../../../src/utilities/custom_exception"
import { ProfileService } from "../../../src/service/profile_service"
import { ProfileController } from "../../../src/controllers/profile_controller"

describe('Unit Test For Profile Controller', () => {
    afterEach(() => {
        sinon.restore()
    })

    it('should create a valid profile', async () => {
        const req = httpMock.createRequest({
            method: "POST",
            url: "/api/v1/user/profile/create",
            body: {
                "userId": "8927301e-4ee7-4163-b529-ee47873cdfae",
                "fullname" : "John Doe",
                "profilePicture": "https://example.com/profile.jpg",
                "bio": "Software engineer with a passion for clean code.",
                "work": "Full-stack Developer at TechCorp",
                "education": "Bachelor's Degree in Computer Science",
                "gender": "MALE",
                "location": "New York, USA",
                "hometown": "Los Angeles, USA"
            }
        })
        const res = httpMock.createResponse()
        const mockResponse: any = {
            code: 201,
            data: { code: 201, data: {}, message: 'SUCCESS' },
            message: 'SUCCESS'
        }

        sinon.stub(ProfileService, 'createProfileService').returns(Promise.resolve(mockResponse))

        await ProfileController.createProfile(req, res)

        console.log("test",res._getJSONData())
        expect(res.statusCode).to.equal(201)
        expect(res._getJSONData()).to.have.property("data")
    })

    

    it('should create a invalid profile', async () => {
        const req = httpMock.createRequest({
            method: "POST",
            url: "/api/v1/user/profile/create",
            body: {
                "fullname" : "John Doe",
                "profilePicture": "https://example.com/profile.jpg",
                "bio": "Software engineer with a passion for clean code.",
                "work": "Full-stack Developer at TechCorp",
                "education": "Bachelor's Degree in Computer Science",
                "gender": "MALE",
                "location": "New York, USA",
                "hometown": "Los Angeles, USA"
            }
        })
        const res = httpMock.createResponse()
        const mockResponse: any = {
            "code": 400,
            "data": "\"userId\" is required",
            "message": "FAILED"
        }

        sinon.stub(ProfileService, 'createProfileService').returns(Promise.resolve(mockResponse))

        await ProfileController.createProfile(req, res)

        expect(res.statusCode).to.equal(400)
        expect(res._getJSONData()).to.have.property("data")
    })
})