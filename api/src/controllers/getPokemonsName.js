const axios = require('axios')
const {Pokemon,Type } = require('../db')


  const URL = "https://pokeapi.co/api/v2/pokemon/";

  const getByName = async (req, res) => {
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
      if (db){
        return  res.status(200).json(db) 
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
      
      for(let i = 0; i < pokeApi.length; i++) {
        if(pokeApi[i].name === String(name)){
          const pokemonById = pokeApi[i]
          return  res.status(200).json(pokemonById) 
         
        } 
      
        
      } 
     
      // pokeApi.map((pokemon) => {
        // if(pokemon.name === String(name)){
          // const pokemonById = {
            // id: pokemon.id,
            // name: pokemon.name,
            // hp: pokemon.hp,
            // attack: pokemon.attack,
            // vida: pokemon.vida ,
            // ataque: pokemon.ataque,
            // defense: pokemon.defense,
            // speed: pokemon.speed,
            // height: pokemon.height,
            // weight: pokemon.weight,
            // img: pokemon.img,
            // type: pokemon.type
          // }
          // 
          // res.status(200).json(pokemonById) 
          // 
        // }
          // 
        // 
        // 
// 
      // })
      return res.status(404).json({"Error":`No existe este pokemon ${name} En La base de datos ni en la api verifica el nombre`  })
    } catch (error) {
      return res.status(500).json({"error":"Internal"})
    }
  };
  
module.exports =  getByName ;