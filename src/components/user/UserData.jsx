import { StyleSheet, View, Text } from "react-native";
import useAuth from "../../store/auth/useAuth";

const UserData = () => {
  const { auth } = useAuth();

  return (
    <View style={styles.root}>
      <Text style={styles.title}>¡Bienvenido {auth.username}!</Text>
      <View style={styles.dataBox}>
        {Object.keys(auth).map((key, index) => {
          return (
            <View key={key} style={styles.dataItem}>
              <Text style={styles.titleItem}>{key}:</Text>
              <Text style={styles.valueItem}>{auth[key]}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
  },
  title: {
    marginBottom: 32,
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
  dataBox: {
    marginBottom: 24,
  },
  dataItem: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  titleItem: {
    fontSize: 14,
    fontWeight: "600",
    textTransform: "capitalize",
    marginRight: 8,
  },
  valueItem: {
    color: "#c6c6c6",
  },
});

export default UserData;
