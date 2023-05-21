import React from 'react'
import {
  orderByName,
  filterByType,
  filterCreated,
  orderByAttack,
} from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

import "./StylesBarraBotons.css"
const BarraBotons = () => {
  const dispatch = useDispatch();  
  const allTypes = useSelector((state)=>state.typesGet)
  

  const handleOrderByName = (e) => {
    dispatch(orderByName(e.target.value));
  };
  const handleOrderByAttack = (e) => {
    dispatch(orderByAttack(e.target.value));
  };
  const handleTypeFilter = (e) => {
    dispatch(filterByType(e.target.value));
  };
  const handleFilterCreated = (e) => {
    dispatch(filterCreated(e.target.value));
  };
  const tipos = Object(allTypes.types)
  return (
    <div className='Botons-Filtro'>
   
           <select onChange={handleOrderByName}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <select
          onChange={handleOrderByAttack}
        >
          <option value='' disabled selected >Filter by Attack</option>
          <option value="fuer-asc">Ascending attack</option>
          <option value="fuer-desc">Descending attack</option>
        </select>
        <select  onChange={handleTypeFilter}>
                        <option value='' disabled selected >Filter by type</option>
                        <option value='todos'>All</option>
                        <option value={tipos[0]}>{tipos[0]}</option>
                        <option value={tipos[1]}>{tipos[1]}</option>
                        <option value={tipos[2]}>{tipos[2]}</option>
                        <option value={tipos[3]}>{tipos[3]}</option>
                        <option value={tipos[4]}>{tipos[4]}</option>
                        <option value={tipos[5]}>{tipos[5]}</option>
                        <option value={tipos[6]}>{tipos[6]}</option>
                        <option value={tipos[7]}>{tipos[7]}</option>
                        <option value={tipos[8]}>{tipos[8]}</option>
                        <option value={tipos[9]}>{tipos[9]}</option>
                        <option value={tipos[10]}>{tipos[10]}</option>
                        <option value={tipos[11]}>{tipos[11]}</option>
                        <option value={tipos[12]}>{tipos[12]}</option>
                        <option value={tipos[13]}>{tipos[13]}</option>
                        <option value={tipos[14]}>{tipos[14]}</option>
                        <option value={tipos[15]}>{tipos[15]}</option>
                        <option value={tipos[16]}>{tipos[16]}</option>
                        <option value={tipos[17]}>{tipos[17]}</option>
                        <option value={tipos[18]}>{tipos[18]}</option>
                        <option value={tipos[19]}>{tipos[19]}</option>
                        
                          
                        
                    </select>
                    <select  onChange={handleFilterCreated}> 
                        <option value='' disabled selected >Created by</option>
                        <option value='todos'>All</option>
                        <option value='nosotros'>Data Base</option>
                        <option value='api'>Api</option>
                    </select>
        
    </div>
  )
}

export default BarraBotons