import { StyleSheet, Text, FlatList } from "react-native";

const PokemonList = (props) => {
  const { pokemons } = props;

  return (
    // <FlatList>
    //   {pokemons.map(({ name, id }) => (
    //     <Text key={id}>{name}</Text>
    //   ))}
    // </FlatList>
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ id }) => `${id}`}
      renderItem={({ item }) => <Text>{item.name}</Text>}
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
