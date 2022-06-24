import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ACCOUNT, POKEDEX, FAVORITE } from "../routes";
import {
  AccountNavigation,
  PokedexNavigation,
  FavoriteNavigation,
} from "./index";

const Navigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={POKEDEX.path}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name={FAVORITE.path}
        component={FavoriteNavigation}
        options={{
          tabBarLabel: FAVORITE.label,
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={POKEDEX.path}
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name={ACCOUNT.path}
        component={AccountNavigation}
        options={{
          tabBarLabel: ACCOUNT.label,
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;

const renderPokeball = () => {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -18 }}
    />
  );
};
