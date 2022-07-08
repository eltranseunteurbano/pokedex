import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Button, View } from "react-native";
import { LoginForm } from "../components/auth/index";
import { UserData } from "../components/user";
import useAuth from "../store/auth/useAuth";

const Account = () => {
  const { auth, logout } = useAuth();
  if (!auth) return <LoginForm />;

  return (
    <SafeAreaView style={styles.root}>
      <UserData />
      <View style={{ width: "100%" }}>
        <Button title="Cerrar sesión" onPress={logout} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Account;
