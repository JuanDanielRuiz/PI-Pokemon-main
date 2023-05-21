const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Pokemon,Type } = require('../db');
const {getAllPokemon} = require("../controllers/getPokemons")
const getById = require('../controllers/getPokemonsById')
const getByName = require('../controllers/getPokemonsName')
const {setTypes,getTypeDb} = require('../controllers/getTypes')
const {getNamedb} = require ('../controllers/PrototypeNamedb')
const {getDbData} = require('../controllers/getPokemonsBD')
const {DeletePokemonBD} = require("../controllers/DeletePokemonBD")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', (req, res) => {


  getAllPokemon(req,res)

})

router.get('/pokemons/:id', (req, res) => {
  

  getById(req, res)
})

router.get('/pokemons/name/:name', (req, res) => {
  

  getByName(req, res)
})

router.get('/pokemons/types/type', (req, res) => {
  

  setTypes(req, res)
  getTypeDb(req, res)
 
})

router.post('/pokemons/types/actualizar', (req, res) =>{

  getTypeDb()

})


router.post('/pokemons/create/newpokemon', async (req, res, next) => {
  const { name, img,vida,ataque,defensa,velocidad,altura,type,peso } =
    req.body;
    

  try {

    const newPokemon = await Pokemon.create({
      name,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
      img,
      type,
      
      
    });


    // const types = await Type.findAll({ where: { name: type } });
    // newPokemon.addTipo(types);

    res.send('Created succesfully');
  } catch (error) {
    next(error);
  }
});



/// Funcion de prueba para realizar las llamadas a la api para obtener datos de pokemon en db por Name 

router.get('/pokemon/namedb/:name', (req, res) => {

  getNamedb(req, res)

})


router.delete('/pokemons/delete/:id',  (req, res) => {
 DeletePokemonBD(req, res)

});







module.exports = router;
