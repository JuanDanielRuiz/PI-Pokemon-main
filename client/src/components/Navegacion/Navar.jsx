import "./StylesNAvar.css";
import logo from './imagenes/logo.jfif';
import { NavLink } from "react-router-dom";
const Navar = () => {
  return (
    <div>
      <nav>
         <NavLink to={'/home'}>
         <img className="logo" src={logo}alt="Logo the Pokeball Navar" />
         </NavLink>
          
        
        <ul class="nav-items">
          <li>
            <a href="/create/pokemon">Crea un Pokemon</a>
          </li>
          <li>
            <a href="/about">Acerca de</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navar;
