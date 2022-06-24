import { API } from '@env'

const getPokemonsAPI = async () => {
  try {
    const url = `${API}/pokemon?limit=20&offset=0`;
    const response = await fetch(url);
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}

export { getPokemonsAPI }