
const ACCOUNT = { path: 'ACCOUNT', label: 'Perfil' }
const FAVORITE = { path: 'FAVORITE', label: 'Favoritos' }

const POKEDEX = { path: 'POKEDEX', label: 'Pókedex' }
const POKEDEX_POKEMON = { path: 'POKEDEX/POKEMON', label: 'Pokemon' }

const MAIN_ROUTES = {
  account: `${ACCOUNT.path}_MAIN`,
  favorite: `${FAVORITE.path}_MAIN`,
  pokedex: `${POKEDEX.path}_MAIN`
}

export { MAIN_ROUTES, ACCOUNT, POKEDEX, POKEDEX_POKEMON, FAVORITE }