import { NavLink } from "react-router-dom";
import "./StylesCard.css";
// import Paginacion from "../Paginacion/Paginacion";
const Card = ({ id, name, type, img,key }) => {

 
  return (
     <div key={id} className="container">
      <div className="card">
        <div className="imagen-pokemon">
          <NavLink to={`/detail/${id}`}>
            <img src={img} alt="pokemon" />
          </NavLink>
        </div>
        <div className="info-pokemon">
          <p>Name:{name}</p>
          {
            typeof type === "string" ? <p>{type}</p> : 
            type.map(element => {
              return(
                <p>{element}</p>
              )
            })
              
          
          }
          
        </div>
      </div>
    </div>
  );
};

export default Card;
