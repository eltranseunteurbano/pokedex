import { createStackNavigator } from "@react-navigation/stack";
import { FAVORITE } from "../routes";
import { FavoriteScreen } from "../screens";

const FavoriteNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={FAVORITE.path}
        component={FavoriteScreen}
        options={{ title: FAVORITE.label }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteNavigation;
