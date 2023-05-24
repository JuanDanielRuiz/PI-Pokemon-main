const axios = require("axios");
require('dotenv').config()
const {Pokemon,Type} = require("../db");

const getDbData = async (req,res) => {
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
        hp: obj.hp,
        attack: obj.attack,
        defense: obj.defense,
        img: obj.img,
        speed: obj.speed,
        createdInDb: obj.createdInDb,
        id: obj.id,
        height: obj.height,
        weight: obj.weight,
        type: obj.tipos?.map((el) => el.name),
      };
    });
   
    return res.status(200).json(info);
  } catch (error) {
    return res.status(404).json({message: error.message});
  }
};

module.exports = {getDbData};