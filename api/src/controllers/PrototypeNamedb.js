const axios = require('axios');
const {Pokemon,Type} = require('../db')


const getNamedb = async (req,res) => {
  const name = req.params.name
 try {
  const db = await Pokemon.findOne({
    where: {
      name,
    },
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
 db ? res.status(200).json(db) : res.status(404).send('Lo siento el pokemon no existe en la base de datos ')
  
 } catch (error) {
  return res.status(404).send('Lo siento el pokemon no existe en la base de datos ',`${name}`)
  
 }

}


module.exports = {
  getNamedb,
}