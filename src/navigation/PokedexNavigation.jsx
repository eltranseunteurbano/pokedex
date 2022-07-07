import { createStackNavigator } from "@react-navigation/stack";
import { POKEDEX, POKEDEX_POKEMON } from "../routes";
import PokedexScreen, { PokemonScreen } from "../screens/Pokedex";

const PokedexNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={POKEDEX.path}
        component={PokedexScreen}
        options={{ title: POKEDEX.label, headerShown: false }}
      />
      <Stack.Screen
        name={POKEDEX_POKEMON.path}
        component={PokemonScreen}
        options={{ title: POKEDEX_POKEMON.label, headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default PokedexNavigation;
