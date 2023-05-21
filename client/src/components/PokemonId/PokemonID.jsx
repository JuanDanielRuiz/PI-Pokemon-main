import React from 'react'
// import axios from 'axios'
import Buscador from '../BuscadorPokemon/Buscador'


const PokemonID = ({id,onSearch}) => {


  

  return (
    <div>
       <Buscador onSearch={onSearch}/>
    </div>
  )
}

export default PokemonID
