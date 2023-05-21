import React from 'react'

const Paginacion = ({NextPage,AnteriorPage})=> {
  return (
    <div>
        <button onClick={AnteriorPage}>Anterior</button>
        <button onClick={NextPage}>Siguiente</button>
      </div>
  )
}

export default Paginacion