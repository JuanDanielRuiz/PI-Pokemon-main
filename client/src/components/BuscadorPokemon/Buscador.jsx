import React, { useState } from 'react'
import "./StylesBuscador.css"


const Buscador = ({onSearch}) => {

  const [BuscadorPokemon,SetBuscadorPokemon] = useState('')
  const handleBuscador = e => {
    SetBuscadorPokemon(e.target.value)
  }
  return (
    <div>
        {/* <!-- search bar right align --> */}
        <div class="search">
         
                <input type="searchs"
                    placeholder=" Search Pokemon"
                    name="search" value={BuscadorPokemon} onChange={handleBuscador}/>
                
                <button onClick={() => onSearch(BuscadorPokemon)}>
                    Buscar
                </button>
          
            
        </div>
    
    </div>
  )
}


export default Buscador