import { Text, Image, StyleSheet, Pressable } from 'react-native'
import { POKEDEX_POKEMON } from '../routes';

const PokemonCard = (props) => {
  const { name, img, type, id } = props;

  const goToPokemon = (id) => {
    console.log(`${POKEDEX_POKEMON.path}/${id}`)
  }

  return (
    <Pressable onPress={() => goToPokemon(id)} style={styles.root}>
      <Image source={{ uri: img }} style={styles.img} />
      <Text>{name}</Text>
      <Text>{type}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: 130,
    padding: 5,
    backgroundColor: 'gray',
    justifyContent: 'center'
  },
  img: {
    width: 130,
    height: 130,
  }
});

export default PokemonCard