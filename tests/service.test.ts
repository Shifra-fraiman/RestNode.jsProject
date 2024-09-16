import request from "supertest";
import app from "../src/index";

let token: string;
beforeAll(async () => {
    const response = await request(app)
        .post("/Auth/signIn")
        .send({ name: "shifra", password: "shifra96" });
    console.log("response.text: ", response.text);
    
    token = response.text;
    console.log("token: "+token);
    
});

describe("/Service", () => {
    it("should return a list of services", async () => {
        const response = await request(app).get("/Service");
        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    businessId: expect.any(String),
                    name: expect.any(String),
                    serviceData: expect.any(Object),
                }),
            ])
        );
    });

    it("should return a new service", async () => {
        const newService = {
            businessId: "66e01df4ff3e2928d0c22858",
            name: "New Service",
            serviceData: { duration: 60, price: 100 },
        };

        const response = await request(app)
            .post("/Service")
            .set("authorization", `Bearer ${token}`) // הוספת טוקן לבקשה
            .send(newService);

        expect(response.status).toBe(201);
        expect(response.body).toMatchObject(newService);
    });

    it("POST /Service - should return 401 if no token is provided", async()=>{
        const newService= {
            businessId: "123456",
            name: "New Service",
            serviceData: { cost: 100 },
        }
        const response= await request(app).post("/Service").send(newService);
        expect(response.status).toBe(401);
    })
});

