import {GET_POKEMONS,GET_POKEMONS_DB,SET_TYPES,GET_TYPES,BY_TYPE,FILTER_CREATED,ORDER_ATTACK,ORDER_BY_NAME,GET_POKEMON_BY_ID,GET_CLEAN,GET_POKEMONS_NAME,DELETE_POKEMON,POST_POKEMON} from "./actions-types";

const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  typesGet: [],
  detail: [],
  pokemonBD: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
      case GET_POKEMONS_DB:
        return {
          ...state,
          pokemonBD: action.payload,
          pokemons: action.payload,
          
        };
  

    case SET_TYPES: {
      return {
        ...state,
        types: action.payload,
        typesGet: action.payload,
      };
    }
    case GET_TYPES:
      return {
        ...state,
        typesGet: action.payload,
      };

    case POST_POKEMON:
      return {
        ...state,
      };

    case BY_TYPE:
      const allPokemon = state.allPokemons;

      const typeFiltered =
        action.payload === 'todos'
          ? allPokemon
          : allPokemon.filter((poke) => {
              return poke.type.includes(action.payload);
            });
      return {
        ...state,
        pokemons: typeFiltered,
      };
    case FILTER_CREATED:
      const allPokemons = state.allPokemons;

      const createdFilter =
        action.payload === 'nosotros'
          ? allPokemons.filter((el) => el.createdInDb)
          : allPokemons.filter((el) => !el.createdInDb);
      return {
        ...state,
        pokemons: action.payload === 'todos' ? allPokemons : createdFilter,
      };

    case ORDER_BY_NAME:
      const sortedPokemons =
        action.payload === 'asc'
          ? state.pokemons.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: sortedPokemons,
      };

    case ORDER_ATTACK:
      const pokemonesAttack = state.allPokemons;
      const sortedByAttack =
        action.payload === 'fuer-asc'
          ? pokemonesAttack.sort((a, b) => {
              if (a.ataque > b.ataque) {
                return 1;
              }
              if (b.ataque > a.ataque) {
                return -1;
              }
              return 0;
            })
          : pokemonesAttack.sort((a, b) => {
              if (b.ataque > a.ataque) {
                return 1;
              }
              if (a.ataque > b.ataque) {
                return -1;
              }
              return 0;
            });
            
      return { ...state, pokemons: sortedByAttack };

    case GET_POKEMONS_NAME:
      return {
        ...state,
        pokemons: [action.payload],
      };

    case GET_POKEMON_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_CLEAN:
      return {
        ...state,
        detail: action.payload,
      };

    case DELETE_POKEMON:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
}