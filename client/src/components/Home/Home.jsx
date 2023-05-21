// Importamos todas las librerias que utilizaremos en nuestro componente
import Card from "../Card/Card";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Cargando from "../Cargando/Cargando";
import Paginacion from "../Paginacion/Paginacion";
import PokemonID from "../PokemonId/PokemonID";
import CardSearch from "../PokemonId/CardSearch";
import {
  getPokemons,
  getTypes,
  getPokemonsBD,
} from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import BarraBotons from "../BarraBotons/BarraBotons";

// Definimos nuestro componente
const Home = () => {
  // const [pokemons, Setpokemons] = useState([]);
  // Estado de pantalla cargando

  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

 

  // Hacemos uso de UseState Para nuestro estado local
  // const [pokemons, Setpokemons] = useState([]);
  const [currenPage, SetCurrenPage] = useState(0);
  const [pokemonSearch, SetPokemonSearch] = useState([]);
  
  /// La importancioa del UseEfect al renderizar nuestro componente se realiza la llamada a la api
  // solo una vez para evitar un ciclo infinito

  //
  const onSearch = async (id) => {
    if (isNaN(id)) {
      console.log("llamada name");
      try {
        const URL = `http://localhost:3001/pokemons/name/${id}`;
        const { data } = await axios(URL);
        SetPokemonSearch(data);
       
        return;
      } catch (error) {
        alert(`No tengo pokemons En mi Api o en Mi base de datos con este nombre ${id}`)
      }
    }
    try {
      console.log("llamada id");
      const URL = `http://localhost:3001/pokemons/${id}`;
      const { data } = await axios(URL);
      SetPokemonSearch(data);
     
      return;
    } catch (error) {
      alert(`No tengo pokemons En mi Api o en Mi base de datos con este id ${id}`)
    }
  };
  //

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
    dispatch(getPokemonsBD())
  }, [dispatch]);

  /// Paginacion
  const FilterPokemonsPaginacion = () => {
    const pokemons10 = pokemons.slice(currenPage, currenPage + 12);
    return pokemons10;
  };

  const NextPage = () => {
    if (currenPage < 36) {
      SetCurrenPage(currenPage + 12);
    }
  };

  const AnteriorPage = () => {
    if (currenPage > 0) {
      SetCurrenPage(currenPage - 12);
    }
  };

  console.log(pokemonSearch);

  
  
   
  return (
    <>
      <div>
      <Paginacion NextPage={NextPage} AnteriorPage={AnteriorPage} />
       
        <PokemonID onSearch={onSearch} pokemonSearch={pokemonSearch} />
        
      </div>
      <h2>Pokemons Cards</h2>
      <BarraBotons/>
      

      {pokemonSearch.id ? (
        <CardSearch
          key={pokemonSearch.id}
          id={pokemonSearch.id}
          name={pokemonSearch.name}
          vida={pokemonSearch.vida}
          ataque={pokemonSearch.ataque}
          defensa={pokemonSearch.defensa}
          velocidad={pokemonSearch.velocidad}
          altura={pokemonSearch.altura}
          peso={pokemonSearch.peso}
          img={pokemonSearch.img}
          type={pokemonSearch.type}
        />
      ) : (
        
        FilterPokemonsPaginacion().map(({ id, name, type, img }) => {
          return <Card key={id} id={id} name={name} type={type} img={img} />;
        })
      )}
      {pokemons.length ? null : <Cargando />}
      
    </>
  );
};

export default Home;
