import AsyncStorage from '@react-native-async-storage/async-storage'
const API = "favorites"

const addPokemonFavoriteApi = async (id) => {
  try {
    const favorites = await getPokemonsFavoriteAPI();
    favorites.push(id)
    await AsyncStorage.setItem(API, JSON.stringify(favorites))
  } catch (error) {
    throw error
  }
}

const getPokemonsFavoriteAPI = async () => {
  try {
    const response = await AsyncStorage.getItem(API)
    return response ? JSON.parse(response) : []
  } catch (error) {
    throw error
  }
}

const isPokemonFavoriteApi = async (id) => {
  try {
    const response = await getPokemonsFavoriteAPI();
    return response.includes(id)
  } catch (error) {
    throw error
  }
}

const removePokemonFavoriteApi = async (id) => {
  try {
    const response = await getPokemonsFavoriteAPI();
    const favorites = response.filter((fav) => fav !== id)
    await AsyncStorage.setItem(API, JSON.stringify(favorites))

  } catch (error) {
    throw error
  }
}

export { addPokemonFavoriteApi, getPokemonsFavoriteAPI, isPokemonFavoriteApi, removePokemonFavoriteApi }