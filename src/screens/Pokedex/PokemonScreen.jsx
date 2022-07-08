import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { getPokemonDataAPI } from "../../api/pokemonAPI";
import { Header, Type, Stats, Favorite } from "../../components/Pokemon";
import useAuth from "../../store/auth/useAuth";

const PokemonScreen = (props) => {
  const {
    navigation,
    route: { params },
  } = props;

  const { id } = params;

  const [data, setData] = React.useState(null);
  const { auth } = useAuth();

  React.useEffect(() => {
    if (!!data) {
      navigation.setOptions({
        headerTitle: data.name[0].toUpperCase() + data.name.slice(1),
        headerRight: () => (
          <View style={styles.right}>
            <Text style={styles.order}># {`${data.order}`.padStart(3, 0)}</Text>
            {!!auth && <Favorite id={data?.id} />}
          </View>
        ),
        headerLeft: () => (
          <Icon
            name="angle-left"
            color="#fff"
            size={24}
            style={{ marginLeft: 24 }}
            onPress={navigation.goBack}
          />
        ),
      });
    }
  }, [data, params, navigation, auth]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDataAPI(id);
        setData(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [id]);

  if (!data) return null; //Colocar skeleton

  return (
    <ScrollView>
      <Header
        id={id}
        name={data.name}
        type={data.types[0].type.name}
        order={data.order}
        image={data.sprites.other["official-artwork"].front_default}
      />
      <View style={styles.content}>
        <Type types={data.types} />
        <Stats stats={data.stats} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
  },
  right: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 24,
  },
  order: {
    fontSize: 12,
    color: "#fff",
    fontStyle: "italic",
  },
});

export default PokemonScreen;
