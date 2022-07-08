import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { getPokemonsFavoriteAPI } from "../api/favoriteAPI";

const Favorite = () => {
  const [favorites, setFavorites] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const response = await getPokemonsFavoriteAPI();
      console.log(response);
    })();
  }, []);

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
    </SafeAreaView>
  );
};

export default Favorite;
