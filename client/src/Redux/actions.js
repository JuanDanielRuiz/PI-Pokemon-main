import axios from 'axios';
import {GET_POKEMONS,GET_POKEMONS_DB,SET_TYPES,GET_TYPES,BY_TYPE,FILTER_CREATED,ORDER_ATTACK,ORDER_BY_NAME,GET_POKEMON_BY_ID,GET_CLEAN,GET_POKEMONS_NAME,DELETE_POKEMON} from "./actions-types";

export function getPokemons() {
  return function (dispatch) {
    axios.get('http://localhost:3001/pokemons').then((pokemons) =>
      dispatch({
        type: GET_POKEMONS,
        payload: pokemons.data,
      })
    );
  };
}
export function getPokemonsBD() {
  return function (dispatch) {
    axios.get('http://localhost:3001/pokemons/db/alls').then((pokemons) =>
      dispatch({
        type: GET_POKEMONS_DB,
        payload: pokemons.data,
      })
    );
  };
}


export function setTypes() {
  return function (dispatch) {
    axios.post('http://localhost:3001/pokemons/types/type').then((types) =>
      dispatch({
        type: SET_TYPES,
        payload: types.data,
      })
    );
  };
}
export function getTypes() {
  return function (dispatch) {
    axios.get('http://localhost:3001/pokemons/types/type').then((types) =>
      dispatch({
        type: GET_TYPES,
        payload: types.data,
      })
    );
  };
}
export function postPokemon(payload) {
  return async function () {
    try {
      await axios.post('http://localhost:3001/pokemons/create/newpokemon', {
        ...payload,
      });
      alert('Succefully created');

    } catch (error) {
      alert('Already exist or some trouble during creation! Come back later');
    }
  };
}

export function filterByType(payload) {
  //console.log(payload, ' filter type');
  return {
    type: BY_TYPE,
    payload,
  };
}

export function filterCreated(payload) {
  //console.log(payload, 'filter created');
  return {
    type: FILTER_CREATED,
    payload,
  };
}

export function orderByAttack(payload) {
  return {
    type: ORDER_ATTACK,
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function getPokemonsById(id) {
  return (dispatch) => {
    try {
      axios.get(`http://localhost:3001/pokemons/${id}`).then((pokemon) =>
        dispatch({
          type: GET_POKEMON_BY_ID,
          payload: pokemon.data,
        })
      );
    } catch (error) {
      console.log(error, 'L86  ID POKEMON');
    }
  };
}

export function getClean() {
  return {
    type: GET_CLEAN,
    payload: [],
  };
}

export function getPokemonsName(payload) {
  return (dispatch) => {
    console.log(payload)
    axios
      .get(`http://localhost:3001/pokemons/name/${payload}`)
      .then((pokemon) =>
        dispatch({
          type: GET_POKEMONS_NAME,
          payload: pokemon.data,
        })
      )
      .catch((err) => alert(`That pokemon doesnt exist "${payload}"`));
  };
}

export function deletePokemon(id) {
  return (dispatch) => {
    try {
      axios
        .delete(`http://localhost:3001/pokemons/delete/${id}`)
        .then(() => dispatch({ type: DELETE_POKEMON }));
    } catch (error) {
      console.log(error, ' L117 ACTIONS');
    }
  };
}