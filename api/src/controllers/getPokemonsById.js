const axios = require('axios')
const {Pokemon,Type} = require('../db')


  const URL = "https://pokeapi.co/api/v2/pokemon";

  const getById = async (req, res) => {
    const id = req.params.id
    // console.log('soy id',id)
  
    try {
      if (typeof id === 'string' && id.length > 5) {
        console.log('soy id')
        const db = await Pokemon.findByPk(id)
        const pokemondb = {
          id: db.id,
          name: db.name,
          img: db.img,
          vida: db.vida,
          ataque: db.ataque,
          defensa: db.defensa,
          velocidad: db.velocidad,
          altura: db.altura,
          peso: db.peso,
          type: db.type,
    
        }
        return res.status(200).json(pokemondb)
      }
      
     
      const  data = await axios.get(URL);
      // if(data[0]) throw new Error(`ID: ${data}  Not Found`);
      const nextPokemonUrl = await axios.get(data.data.next);
      const pok =[...data.data.results,...nextPokemonUrl.data.results]
      const pokeApi = await Promise.all(
        pok.map(async (el) => {
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
      //  console.log(pokeApi[1].id === id)
      for(let i = 0; i < pokeApi.length; i++) {
        if(pokeApi[i].id === Number(id)){
          const pokemonById = pokeApi[i]
          return res.status(200).json(pokemonById);
         
        } 
      
        
      } 
       
       
      
    
     
      return res.status(404).json({message})
    } catch (error) {
      
      return  res.status(500).json({"error":"Internal"})
      
    }
  };
  
module.exports =  getById ;
