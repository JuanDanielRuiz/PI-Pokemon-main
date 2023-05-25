import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon } from "../../Redux/actions.js";
import { validate } from "./validaciones.js";
import "./StylesForms.css";
import { getTypes ,getPokemons,getPokemonsBD} from "../../Redux/actions.js";


function PokemonForm() {
  const types = useSelector((state) => state.typesGet);
  const allspokemons = useSelector((state) => state.allPokemons);
  const [Repetido, Setrepetido] = useState ({
    repetido:false
  })
  const [errors, setErrors] = useState({
    name: "",
    img: "",
    vida: "",
    ataque: "",
    defensa: "",
    velocidad: "",
    altura: "",
    peso: "",
    type: '',
    
    
  });

  const [userData, setUserData] = useState({
    nombre: "",
    vida: 0,
    imagen: "",
    ataque: 0,
    defensa: 0,
    velocidad: 0,
    altura: 0,
    peso: 0,
    type: [],
   
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemons());
  }, [dispatch]);

  /// Se Esta trabajando en la funcion que controla si ya existe un pokemon en el estado global entre api y base de datos con un name no te permite crearlo para no tener pokemons duplicados 
  const handleRepet = (e) => {
    allspokemons.map((pokeemon) => {
      
      if(pokeemon.name === e.target.value) {
        Setrepetido({
          ...Repetido,
          repetido: true
          
          
        })
        return
        
  
      }else{
      Setrepetido({
        ...Repetido,
        repetido: false
        
      })
      
    }
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
        
      })
    );
    
      
    })

  }
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
        
      })
    );
  };
// console.log("typos" ,userData.type.length)
console.log(allspokemons)
 

  const agregarPokemon = (e) => {
    if(userData.type.length >= 2){
      alert('Solo puedes elejir 2 tipos de pokemon')
      return 
    }
    setUserData({
      ...userData,
       [e.target.name]: [...userData.type, e.target.value]
    })
    setErrors(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
        
      })
    );
    
    

    
    
    

    }
    

  const handleSubmit = (event) => {
    event.preventDefault();

    const nuevoPokemon = {
      name: userData.nombre,
      img: userData.imagen,
      vida: userData.vida,
      ataque: userData.ataque,
      defensa: userData.defensa,
      velocidad: userData.velocidad,
      altura: userData.altura,
      peso: userData.peso,
      type: userData.type,
    };
      // dispatch(postPokemon(nuevoPokemon));
    dispatch(postPokemon(nuevoPokemon));
  };

  return (
    <div className="fondo-Background-forms">
    <div className="container-Forms fondo-Forms">
      <h1>Crear un nuevo Pokémon</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={userData.nombre}
          onChange={handleChange}
        />

        {Repetido.repetido && <p>El Nombre del pokemon ya existe </p>}
        {errors.repetido && <p>{errors.repetido}</p>}

        <br />
        <br />
        <label htmlFor="nombre">Imagen:</label>
        <input
          type="text"
          name="imagen"
          value={userData.imagen}
          onChange={handleChange}
        />
        {errors.imagen && <p>{errors.imagen}</p>}
        <br />
        <br />
        <label htmlFor="nombre">Ataque:</label>
        <input
          type="number"
          name="ataque"
          value={userData.ataque}
          onChange={handleChange}
        />
        {errors.ataque && <p>{errors.ataque}</p>}
        <br />
        <br />
        <label htmlFor="nombre">Vida:</label>
        <input
          type="number"
          name="vida"
          value={userData.vida}
          onChange={handleChange}
        />
        {errors.vida && <p>{errors.vida}</p>}
        <br />
        <br />
        <label htmlFor="nombre">Defensa:</label>
        <input
          type="number"
          name="defensa"
          value={userData.defensa}
          onChange={handleChange}
        />
        {errors.defensa && <p>{errors.defensa}</p>}
        <br />
        <br />
        <label htmlFor="nombre">Velocidad:</label>
        <input
          type="number"
          name="velocidad"
          value={userData.velocidad}
          onChange={handleChange}
        />
        {errors.velocidad && <p>{errors.velocidad}</p>}
        <br />
        <br />
        <label htmlFor="nombre">Altura:</label>
        <input
          type="number"
          name="altura"
          value={userData.altura}
          onChange={handleChange}
        />
        {errors.altura && <p>{errors.altura}</p>}
        <br />
        <br />
        <label htmlFor="nombre">Peso:</label>
        <input
          type="number"
          name="peso"
          value={userData.peso}
          onChange={handleChange}
        />
        {errors.peso && <p>{errors.peso}</p>}
        <br />
        <br />
        <label htmlFor="nombre">Tipos:</label>

        <select name="type"  onChange={agregarPokemon}>
          <option value="" selected disabled>
            Tipos de pokemon
          </option>

          {types.types?.map((element) => {
            return <option value={element}>{element}</option>;
          })}
        </select>
        {userData.type && userData.type.map((element) => {
          return (
            <p>Seleccionaste Este Tipo de pokemon -{element}</p>
          )
        })
          }
        {errors.type && <p>{errors.type}</p>}

        <br />
        <br />
      
        <br/>

        {Object.keys(errors).length > 0 || Repetido.repetido === true? (
          <button disabled type="submit">
            Crear
          </button>
        ) : (
          <button type="submit">Crear</button>
        )}
      </form>
    </div>
    </div>
  );
}

export default PokemonForm;
