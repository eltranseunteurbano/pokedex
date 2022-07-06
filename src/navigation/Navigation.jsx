import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { MAIN_ROUTES, FAVORITE, ACCOUNT } from "../routes";
import AccountNavigation from "./AccountNavigation";
import PokedexNavigation from "./PokedexNavigation";
import FavoriteNavigation from "./FavoriteNavigation";

const Navigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={MAIN_ROUTES.pokedex}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name={MAIN_ROUTES.favorite}
        component={FavoriteNavigation}
        options={{
          tabBarLabel: FAVORITE.label,
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={MAIN_ROUTES.pokedex}
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name={MAIN_ROUTES.account}
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
      style={{ width: 60, height: 60, top: -15 }}
    />
  );
};
