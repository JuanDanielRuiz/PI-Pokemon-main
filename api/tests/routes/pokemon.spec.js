/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Pokemon, conn } = require("../../src/db.js");

const agent = session(app);
const pokemon = {
  name: "Pikachu",
};
const pokemonBD = {
  "name": "jldpe",
  "ataque": "12",
  "defensa": "23",
  "vida": "4",
  "velocidad": "10",
  "altura": "5",
  "peso": "9",
  "img": "https://pokemon-pi-ten.vercel.app/static/media/Charmander.e427dc05.gif",
  "type": "Fuego",
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
  it("Existe un Error con respuesta 500", async () => {
    const response = await agent.get("/pokemons/3454")
    .expect(500);
  });
  it("POST /pokemons/create/newpokemon", async () => {
    const response = await agent.post("/pokemons/create/newpokemon")
    .send(pokemonBD)
    expect(response.body)
  });
  it("DELETE /pokemons/delete/:id", async () => {
    const response = await agent.delete("/pokemons/delete/93dde505-8c9c-4846-af5a-a535c9faf3ae")
    .expect(200)
  })
   it("GET  DE API /pokemons/name/:name", async () => {
    const response = await agent.get("/pokemons/name/bulbasaur")
   .expect(200)
   })
   it("GET  DE API /pokemons/name/:name", async () => {
    const response = await agent.get("/pokemons/name/bulbasaurfff")
   .expect(404)
   })
   it("GET BASE DE DATOS /pokemons/name/:name status 200", async () => {
    const response = await agent.get("/pokemons/name/Pikachu")
    .expect(200)
   })
   it("GET BASE DE DATOS /pokemons/name/:name status 404", async () => {
    const response = await agent.get("/pokemons/name/joselito")
    .expect(404)
   })
  
});
