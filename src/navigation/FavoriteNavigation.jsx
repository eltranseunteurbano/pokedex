import { createStackNavigator } from "@react-navigation/stack";
import { FAVORITE, POKEDEX_POKEMON } from "../routes";
import { FavoriteScreen } from "../screens";
import { PokemonScreen } from "../screens/Pokedex";

const FavoriteNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={FAVORITE.path}
        component={FavoriteScreen}
        options={{ title: FAVORITE.label, headerShown: false }}
      />
      <Stack.Screen
        name={POKEDEX_POKEMON.path}
        component={PokemonScreen}
        options={{
          title: "",
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: title,
        }}
      />
    </Stack.Navigator>
  );
};

const title = {
  textTransform: "uppercase",
  color: "#fff",
  fontWeight: "400",
  letterSpacing: 4,
  fontSize: 20,
};

export default FavoriteNavigation;
