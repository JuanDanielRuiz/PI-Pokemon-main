const { Pokemon} = require('../db');

const  DeletePokemonBD = (req,res) => {
  try {
    const id = req.params.id
    Pokemon.destroy({ where: { id } });
    res.status(200).send('Done');
  } catch (error) {
    return res.status(500).send({message: error.message}); 
  }
} 
module.exports = {DeletePokemonBD}