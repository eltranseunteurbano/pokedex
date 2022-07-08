import { createStackNavigator } from "@react-navigation/stack";
import { ACCOUNT } from "../routes";
import { AccountScreen } from "../screens";

const AccountNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ACCOUNT.path}
        component={AccountScreen}
        options={{ title: ACCOUNT.label, headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigation;
