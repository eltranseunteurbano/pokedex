import { View, StyleSheet, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

const Header = (props) => {
  const { id, name, type, order, image } = props;

  return (
    <>
      <View
        style={{
          ...styles.background,
          backgroundColor: getColorByPokemonType(type),
        }}
      />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.order}># {`${order}`.padStart(3, 0)}</Text>
        </View>

        <View style={styles.imgBox}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 380,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    textTransform: "uppercase",
    color: "#fff",
    fontWeight: "400",
    letterSpacing: 4,
    fontSize: 20,
  },
  order: {
    fontSize: 12,
    color: "#fff",
    fontStyle: "italic",
  },
  imgBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
});

export default Header;
