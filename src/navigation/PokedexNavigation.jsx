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

export default PokedexNavigation;
