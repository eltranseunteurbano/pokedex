import { FlatList } from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {
  const { pokemons } = props;

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
    />
  );
};

export default PokemonList;
