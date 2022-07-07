import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {
  const { pokemons, loadPokemons, isNext } = props;

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { imagen, name, type, id, order } }) => (
        <PokemonCard
          img={imagen}
          name={name}
          type={type}
          id={id}
          order={order}
        />
      )}
      onEndReached={isNext ? loadPokemons : undefined}
      onEndReachedThreshold={1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spiner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  spiner: {
    marginTop: 20,
    marginBottom: 40,
  },
});

export default PokemonList;
