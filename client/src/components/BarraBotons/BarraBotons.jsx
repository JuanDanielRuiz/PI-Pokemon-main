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
                        {
                          allTypes.types?.map( type => {
                            return (
                              <option value={type}>{type}</option>
                            )
                          })
                        }
                        
                          
                        
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