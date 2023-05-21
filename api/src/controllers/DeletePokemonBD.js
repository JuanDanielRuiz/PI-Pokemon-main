const { Pokemon} = require('../db');

const  DeletePokemonBD = (req,res) => {
  try {
    const id = req.params.id
    Pokemon.destroy({ where: { id } });
    res.send('Done');
  } catch (error) {
    console.log('soy id delete',id)
    console.log(error);
  }
} 
module.exports = {DeletePokemonBD}