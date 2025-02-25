const request = require("supertest");
const app = require("./server"); // Importer l'application Express
const mongoose = require("mongoose");

// Avant tous les tests, connecter à la base de test
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});

// Après tous les tests, fermer la connexion MongoDB
afterAll(async () => {
  await mongoose.connection.close();
});

// Test GET /products
test("GET /products doit retourner un tableau", async () => {
  const res = await request(app).get("/products");
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

// Test POST /products
test("POST /products doit ajouter un produit", async () => {
  const newProduct = {
    name: "Produit Test",
    price: 19.99,
    description: "Un produit pour les tests",
  };

  const res = await request(app).post("/products").send(newProduct);
  expect(res.statusCode).toBe(200);
  expect(res.body.name).toBe(newProduct.name);
  expect(res.body.price).toBe(newProduct.price);
});
