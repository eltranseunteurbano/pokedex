const API = "https://pokeapi.co/api/v2/"
const getPokemonsAPI = async (nextUrl) => {
  try {
    const url = `${API}pokemon?limit=20&offset=0`;
    const response = await fetch(nextUrl || url);
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}

const getPokemonDetailAPI = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}

const getPokemonDataAPI = async (id) => {
  try {
    const response = await fetch(`${API}/pokemon/${id}`);
    const result = await response.json();
    return result
  } catch (error) {
    throw error;
  }
}

export { getPokemonsAPI, getPokemonDetailAPI, getPokemonDataAPI, API as POKEMON_API }