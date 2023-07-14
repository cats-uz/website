const request = require("supertest");
const { app, server } = require("../index");

// Close the server after all tests
afterAll(() => {
  server.close();
});

describe("POST /user/register", () => {
  it("should create a new user", async () => {
    const response = await request(app)
      .post("/user/register")
      .send({
        username: "testuser",
        name: "test",
        password: "testpassword",
      })
      .expect(201);
  });

  it("should return 400 if validation fails", async () => {
    const response = await request(app)
      .post("/user/register")
      .send({
        username: "testuser",
      })
      .expect(400);
  });
});

describe("POST /user/login", () => {
  it("should return success", async () => {
    const response = await request(app)
      .post("/user/login")
      .send({
        username: "ismatovsanjarbek",
        password: "12345678",
      })
      .expect(200);

    expect(response.header["x-token"]).toBeDefined();
  });

  it("should return 400 if validation fails", async () => {
    const response = await request(app)
      .post("/user/login")
      .send({
        username: "testuser",
      })
      .expect(400);

    expect(response.text).toBe("Fail");
  });
});
