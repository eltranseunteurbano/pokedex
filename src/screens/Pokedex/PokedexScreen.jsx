import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { getPokemonsAPI, getPokemonDetailAPI } from "../../api/pokemonAPI";
import { PokemonList } from "../../components";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  const loadPokemons = async () => {
    try {
      const data = await getPokemonsAPI(nextUrl);
      setNextUrl(data.next);

      const pokemosArray = [];
      for await (const tempPokemon of data.results) {
        const { id, name, types, order, sprites } = await getPokemonDetailAPI(
          tempPokemon.url
        );
        pokemosArray.push({
          id,
          name,
          type: types[0].type.name,
          order,
          imagen: sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons((prev) => [...prev, ...pokemosArray]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={!!nextUrl}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 16,
  },
});
export default Pokedex;
