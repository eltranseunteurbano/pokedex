import { View, Text, StyleSheet } from "react-native";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

const Type = (props) => {
  const { types } = props;

  return (
    <View style={styles.root}>
      {types.map(({ type: { name, url } }) => (
        <View
          key={url}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(name),
          }}
        >
          <Text style={styles.pillTitle}>{name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginVertical: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 24,
    paddingVertical: 4,
    borderRadius: 24,
    marginHorizontal: 12,
  },
  pillTitle: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1,
  },
});

export default Type;
