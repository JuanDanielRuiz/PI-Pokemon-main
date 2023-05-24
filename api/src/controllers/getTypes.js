const axios = require('axios');
const { Type } = require('../db');

const setTypes = async (req,res) => {
  try {
    const pokemonTypes = await axios.get('https://pokeapi.co/api/v2/type');

    const types = pokemonTypes.data.results.map((obj) => obj.name);

    types.map((tipo) => {
      Type.findOrCreate({
        where: { name: tipo },
      });
    });
   
    
    return res.status(200).json({ types });
  } catch (e) {
    throw new Error('error L26 gettypes');
  }
};

const getTypeDb = async () => {
  try {
    const pokemonTypes = await Type.findAll();
    return pokemonTypes;
  } catch (e) {
    throw new Error('Error L28 gettypes');
  }
};

module.exports = { setTypes, getTypeDb };