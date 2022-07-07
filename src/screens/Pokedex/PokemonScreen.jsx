import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { getPokemonDataAPI } from "../../api/pokemonAPI";
import { Header, Type, Stats } from "../../components/Pokemon";

const PokemonScreen = (props) => {
  const {
    navigation,
    route: {
      params: { id },
    },
  } = props;

  const [data, setData] = React.useState(null);

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
});

export default PokemonScreen;
