import { assert, expect } from "chai"
import * as sinon from "sinon"
import * as httpMock from "node-mocks-http"
import { UsersService } from "../../../src/service/users_service"
import { UserController } from "../../../src/controllers/users_controller"
import { CustomException } from "../../../src/utilities/custom_exception"

describe('Unit Test For Users Controller', () => {
    afterEach(() => {
        sinon.restore()
    })

    it('should register a valid user', async () => {
        const req = httpMock.createRequest({
            method: "POST",
            url: "/api/v1/users/register",
            body: {
                email: "testmock@test.com",
                password: "test12345678"
            }
        })
        const res = httpMock.createResponse()
        const mockResponse: any = {
            code: 201,
            data: { code: 201, data: {}, message: 'SUCCESS' },
            message: 'SUCCESS'
        }

        sinon.stub(UsersService, 'registerUserService').returns(Promise.resolve(mockResponse))

        await UserController.registerUser(req, res)

        expect(res.statusCode).to.equal(201)
        expect(res._getJSONData()).to.have.property("data")
    })

    it('should register a invalid user', async () => {
        const req = httpMock.createRequest({
            method: "POST",
            url: "/api/v1/users/register",
            body: {
                email: "testmock.com",
                password: "test12345678"
            }
        })
        const res = httpMock.createResponse()
        const mockResponse: any = { "code": 400, "data": "\"email\" must be a valid email", "message": "FAILED" }

        sinon.stub(UsersService, 'registerUserService').returns(Promise.resolve(mockResponse))

        await UserController.registerUser(req, res)

        expect(res.statusCode).to.equal(400)
        expect(res._getJSONData()).to.have.property("data")
    })

    it('should valid user login', async () => {
        const req = httpMock.createRequest({
            method: "POST",
            url: "/api/v1/users/login",
            body: {
                email : "johndoe@gmail.com",
                password : "test12345678"
            }
        })
        const res = httpMock.createResponse()
        const mockResponse: any = {
            "code": 200,
            "data": {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAZ21haWwuY29tIiwiaWF0IjoxNzMwODY1OTg2LCJleHAiOjE3MzA5NTIzODZ9.cVHE4iLKThi8l7eAGhV7xWPsxtDHNa17sd7vpM3yad4"
            },
            "message": "SUCCESS"
        }

        sinon.stub(UsersService, 'login').returns(Promise.resolve(mockResponse))

        await UserController.loginUser(req, res)

        expect(res.statusCode).to.equal(200)
        expect(res._getJSONData()).to.have.property("data")
    })

    it('should invalid user login', async () => {
        const req = httpMock.createRequest({
            method: "POST",
            url: "/api/v1/users/login",
            body: {
                email : "johndoeee@gmail.com",
                password : "test12345678"
            }
        })
        const res = httpMock.createResponse()

        sinon.stub(UsersService, 'login').returns(Promise.reject(new CustomException("invalidUser","Email / Password invalid Combination",400)))

        await UserController.loginUser(req, res)

        expect(res.statusCode).to.equal(400)
        expect(res._getJSONData()).to.have.property("data")
    })
})