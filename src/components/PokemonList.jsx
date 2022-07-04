import { StyleSheet, FlatList } from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {
  const { pokemons } = props;
  console.log( { pokemons })

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ id }) => `${id}`}
      renderItem={({ item: { imagen, name, type, id } }) => <PokemonCard img={imagen} name={name} type={type} id={id} />}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 24,
  },
});

export default PokemonList;
