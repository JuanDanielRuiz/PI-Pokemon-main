import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import './StylesPokemonId.css'



const CardSearch = ({id,name,vida,ataque,defensa,velocidad,altura,peso,img,type}) => {
  // console.log(pokemonSearch)
  
  return (
    <div className="containersearch">
      <div className="card-search">
      <Link to="/">
      <button>Regresar</button>
      </Link>
        <div className="imagen-pokemon-search">
          <NavLink to={`/detail/${id}`}>
            <img src={img} alt="pokemon" />
          </NavLink>
        </div>
        <div className="info-pokemon-search">
          <p>Name:{name}</p>
          {
            velocidad !== null ? <p>Velocidad:{velocidad}</p> : <p>Velocidad:Null</p>
          }
          
          <p>Vida: {vida}</p>
          <p>Ataque: {ataque}</p>
          <p>Defensa: {defensa}</p>
          <p>Altura: {altura}</p>
          <p>Peso:{peso}</p>
          <h2>Tipos</h2>
          <p>{type}</p>
        </div>
      </div>
    </div>
  )
}

export default CardSearch
