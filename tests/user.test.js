const request = require("supertest");
const { app, server } = require("../index");
afterAll(() => {
  server.close();
});

describe("USER routes", () => {
  it("should return Hello World with 200 status code", async () => {
    const res = await request(app).post("/user/register").send({
      name: "Sanjarbek",
      username: "ismatovsanjarbek",
      password: "12345678",
    });
    expect(res.statusCode).toBe(200);
  });
});
