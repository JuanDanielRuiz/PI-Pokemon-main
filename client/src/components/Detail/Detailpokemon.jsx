import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"
import {deletePokemon} from "../../Redux/actions"
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import "./StylesDetail.css"
import Cargando from "../Cargando/Cargando";
const DetailPokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const id = useParams()
  const dispatch = useDispatch(); 

  useEffect(() =>{
    axios(`http://localhost:3001/pokemons/${id.id}`).then(({ data }) => {
      if (data.name) {
        setPokemon(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return setPokemon({});
      

  },[id.id])

  const handleClickDelete = () => {
    dispatch(deletePokemon(id.id))
    
  } 
 
 
  return (
    <div className="fondo-Detail">
    
     <div className="containerDetail">
      <Link to="/home">
      <button>Regresar</button>
      </Link>
      <div className="card-Detail">
        <div className="imagen-pokemon-Detail">
       
            <img src={pokemon.img} alt="pokemon" />
         
        </div>
        <div className="info-pokemon-Detail">
          <p>Name:{pokemon.name}</p>
          <p>Vida: {pokemon.vida}</p>
          <p>Ataque: {pokemon.ataque}</p> 
          <p>Defensa: {pokemon.defensa}</p>
          {
            pokemon.velocidad !== null ? <p>Velocidad: {pokemon.velocidad}</p> : <p>Velocidad: Null</p>
            
          }
           {
            pokemon.altura !== null ? <p>Altura: {pokemon.altura}</p> : <p>Altura: Null</p>
          }
           {
            pokemon.peso !== null ? <p>Peso:{pokemon.peso}</p> : <p>Peso: Null</p>
          }
          <h2>Tipos</h2>
          <p>{pokemon.type}</p>
        </div>
        {
         id.id.length > 5 ? 
         <Link to={'/home'}>
         <button className="Delete" onClick={handleClickDelete}>Delete</button> 
         </Link>
         
         : null
         
      }
      </div>
     
    </div>
    {
      pokemon.id ? null : <Cargando/>
    }
    </div>
  )
}

export default DetailPokemon 