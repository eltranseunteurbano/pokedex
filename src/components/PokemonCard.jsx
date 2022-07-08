import { Text, Image, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { POKEDEX_POKEMON } from "../routes";
import getColorByPokemonType from "../utils/getColorByPokemonType";

const PokemonCard = (props) => {
  const { name, img, type, id, order } = props;
  const navigation = useNavigation();

  const goToPokemon = (id) => {
    navigation.navigate(POKEDEX_POKEMON.path, { id });
  };

  return (
    <View style={styles.root}>
      <Pressable
        onPress={() => goToPokemon(id)}
        style={{
          ...styles.card,
          backgroundColor: getColorByPokemonType(type),
        }}
      >
        <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        <Image source={{ uri: img }} style={styles.img} />
        <Text style={styles.title}>{name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 8,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
    padding: 8,
    paddingVertical: 16,
  },
  img: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  title: {
    textTransform: "uppercase",
    color: "#fff",
    fontWeight: "400",
    letterSpacing: 2,
    fontSize: 12,
  },
  order: {
    position: "absolute",
    top: 8,
    right: 8,
    fontSize: 10,
    color: "#fff",
    fontStyle: "italic",
  },
});

export default PokemonCard;
