const axios = require("axios");
require('dotenv').config()
const {Pokemon,Type} = require("../db");

const URL = "https://pokeapi.co/api/v2/pokemon";

const getApiData = async () => {
  //esto me da un array con urls
  //Con previusPokemonUrls me refiero a que son los primeros pokemons que traigo
  const previusPokemonUrls = await axios.get(URL);
  //Entro a la propiedad next del previus y me traigo los otros 20
  const nextPokemonUrl = await axios.get(previusPokemonUrls.data.next);

  //Concateno los arrays de results que adentro tienen name y url de cada pokemon
  const allPokemonsUrls = [
    ...previusPokemonUrls.data.results,
    ...nextPokemonUrl.data.results,
  ];

  //Aca guardo la respuesta, es decir el array de pokemons
  //Si no usara promise.all esto me devuelve un array de promises pending
  //Usando este metodo, no se devuelve hasta que NO TERMINA de resolver todas las promesas
  //A este metodo le paso el array con todos los pokemons y accedo a la prop url
  //Con eso puedo conseguir la data de cada pokemon y guardarla en un obj
  const pokeApi = await Promise.all(
    allPokemonsUrls.map(async (el) => {
      let pokemon = await axios(el.url);
      return {
        id: pokemon.data.id,
        name: pokemon.data.name,
        vida: pokemon.data.stats[0].base_stat,
        ataque: pokemon.data.stats[1].base_stat,
        defensa: pokemon.data.stats[2].base_stat,
        velocidad: pokemon.data.stats[5].base_stat,
        altura: pokemon.data.height,
        peso: pokemon.data.weight,
        img: pokemon.data.sprites.other.dream_world.front_default,
        img: pokemon.data.sprites.front_default,
        type: pokemon.data.types.map((tipo) => tipo.type.name),
      };
    })
  );
  return pokeApi;
};

const getDbData = async () => {
  try {
    const pokemons = await Pokemon.findAll({
      include: {
        //Incluime el model Tipo
        model: Type,
        //TRAEME EL ATRIBUTO NAME
        attributes: ['name'],
        //MEDIANTE LOS ATRIBUTOS, VA SIEMPRE, BUENA PRACTICA
        through: {
          attributes: [],
        },
      },
    });

    const info = pokemons.map((obj) => {
      return {
        name: obj.name,
        vida: obj.vida,
        ataque: obj.ataque,
        defense: obj.defense,
        img: obj.img,
        velocidad: obj.velocidad,
        createdInDb: obj.createdInDb,
        id: obj.id,
        Altura: obj.altura,
        peso: obj.peso,
        type: obj.type
      };
    });
  
    return info;
  } catch (error) {
    console.log(error);
  }
};

const getAllPokemon = async (req,res ) => {
  const apiData = await getApiData();
  const dbData = await getDbData();
  const dbPlusApi = [...apiData, ...dbData];
  return res.status(200).json(dbPlusApi);;
};

module.exports = { getAllPokemon };