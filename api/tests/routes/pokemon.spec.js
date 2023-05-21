/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Pokemon, conn } = require("../../src/db.js");


const agent = session(app);
const pokemon = {
  name: "Pikachu",
};

describe("Pokemon routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Pokemon.sync({ force: true }).then(() => Pokemon.create(pokemon))
  );
  describe("GET /pokemons", () => {
    it("should get 200", () => agent.get("/pokemons").expect(200));
  });
  describe("Test routes", () => {
    describe("GET /pokemons", () => {
      it("Response con Status 200 ", async () => {
        await agent.get("/pokemons").expect(200);
      });
    });
  });
  it('Response es un objeto con las propiedades: "id", "name", "Vida", "ataque", "defensa", "velocidad", "altura", "peso", "img", "type"', async () => {
    const response = await agent.get("/pokemons/1");
    const data = [
      "id",
      "name",
      "Vida",
      "ataque",
      "defensa",
      "velocidad",
      "altura",
      "peso",
      "img",
      "type",
    ];
   
   
  });
  it("Existe un Error con respuesta 500" , async () => {
    const response = await agent.get("/pokemons/3454");
    expect(response.status).toBe(500);
  })
});
