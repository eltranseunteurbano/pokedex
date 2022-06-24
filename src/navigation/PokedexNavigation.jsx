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
        options={{ title: POKEDEX.label }}
      />
      <Stack.Screen
        name={POKEDEX_POKEMON.path}
        component={PokemonScreen}
        options={{ title: POKEDEX_POKEMON.label }}
      />
    </Stack.Navigator>
  );
};

export default PokedexNavigation;
