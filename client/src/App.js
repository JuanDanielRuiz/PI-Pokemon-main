import "./App.css";

import Home from "./components/Home/Home";
// import Card from "./components/Card/Card";
// import { useEffect } from "react";
import { Routes,Route,useLocation} from "react-router-dom";
import DetailPokemon from "./components/Detail/Detailpokemon";
import Inicio from "./components/Inicio/Inicio";
import Navar from "./components/Navegacion/Navar";
import CardSearch from "./components/PokemonId/CardSearch"
import PokemonForm from "./components/FormsCreatePokemon/FormsPokemons";
import About from "./components/About/About";




function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* <h1>Henry Pokemon</h1> */}
      {
        location.pathname !== "/" ? <Navar/> : null
      }
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/detail/:id" element={<DetailPokemon/>}/>
        <Route path="/Search" element={<CardSearch/>}/>
        <Route  path="/Create/pokemon" element={<PokemonForm/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
