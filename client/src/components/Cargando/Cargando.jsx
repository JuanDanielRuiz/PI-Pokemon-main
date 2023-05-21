import React from 'react'
import cargando from "./img/cargando.gif"
import './StylesCargando.css'

export const Cargando = () => {
  return (
    <>
    <img className='logo-cargnado' src={cargando} alt="Pikachu Cargando" />
    <div>Cargando..</div>
    </>
  )
}

export default Cargando

