import {assert,expect} from "chai"
import app from "../app"
import request from "supertest"

describe('API status test', () => {
    it('should return status code 200', async () => {
        const response = await request(app).get("/api/v1/test");
        expect(response.status).to.equal(200);
    });
});