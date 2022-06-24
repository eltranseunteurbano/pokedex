import { useEffect, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { getPokemonsAPI } from "../../api/pokemonAPI";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  const loadPokemons = async () => {
    try {
      const data = await getPokemonsAPI();
      setPokemons(() => [...data.results]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  console.log(pokemons);

  return (
    <SafeAreaView>
      <Text>Pókedex</Text>
    </SafeAreaView>
  );
};

export default Pokedex;
