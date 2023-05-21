import './StyleInicio.css'
import { NavLink } from 'react-router-dom'

const Inicio = () => {
  return (
  
    <div className="PokemonWelcome">
      <div className="background"></div>
      <div className="content">
        <h1>Bienvenido a mi sitio web de Pokémon, Donde podras Tener una Aventura Pokemon.</h1>
        <NavLink to={'/Home'}>
        <button>Entrar</button>
        </NavLink>
    
      </div>
    </div>

  )
}


export default Inicio
