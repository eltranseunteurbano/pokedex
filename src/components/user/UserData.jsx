import { StyleSheet, View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import useAuth from "../../store/auth/useAuth";
import React from "react";
import { getPokemonsFavoriteAPI } from "../../api/favoriteAPI";

const UserData = () => {
  const { auth } = useAuth();
  const [total, setTotal] = React.useState(0);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        try {
          const resolve = await getPokemonsFavoriteAPI();
          setTotal(resolve.length);
        } catch (error) {
          setTotal(0);
        }
      })();
    }, [auth])
  );

  return (
    <View style={styles.root}>
      <Text style={styles.title}>¡Bienvenido {auth.username}!</Text>
      <View style={styles.dataBox}>
        <UserItem title="Usuario" value={auth.username} />
        <UserItem title="Nombre" value={auth.firstName} />
        <UserItem title="Apellido" value={auth.latsName} />
        <UserItem title="Correo" value={auth.email} />
        <UserItem title="Favoritos" value={total} />
      </View>
    </View>
  );
};

const UserItem = ({ title, value }) => {
  return (
    <View style={styles.dataItem}>
      <Text style={styles.titleItem}>{title}:</Text>
      <Text style={styles.valueItem}>{value}</Text>
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
    color: "#017eff",
  },
  valueItem: {
    color: "#808080",
  },
});

export default UserData;
