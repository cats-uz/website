const request = require("supertest");
const { app, server } = require("../index");
const mongoose = require("mongoose");
beforeAll(async () => {
  await mongoose.connect(process.env.DB_URL);
});
afterAll(async () => {
  await mongoose.connection.close();
  server.close();
});

describe("USER routes", () => {
  it("should return 'Created' with 201 status code", async () => {
    const res = await request(app).post("/user/register").send({
      name: "Sanjarbek",
      username: "ismatovsanjarbek",
      password: "12345678",
    });
    expect(res.statusCode).toBe(201);
  });
});
