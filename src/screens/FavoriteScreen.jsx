import React, { useState, useCallback } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import useAuth from "../store/auth/useAuth";
import { getPokemonsFavoriteAPI } from "../api/favoriteAPI";
import { getPokemonDetailAPI, POKEMON_API } from "../api/pokemonAPI";
import { PokemonList } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";

const FavoriteScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (!!auth) {
        (async () => {
          setPokemons([]);
          setLoading(true);
          const favoritePokemonsId = await getPokemonsFavoriteAPI();
          for await (const id of favoritePokemonsId) {
            const pokemonDetail = await getPokemonDetailAPI(
              `${POKEMON_API}/pokemon/${id}`
            );
            setPokemons((prev) => [
              ...prev,
              {
                id: pokemonDetail.id,
                name: pokemonDetail.name,
                type: pokemonDetail.types[0].type.name,
                order: pokemonDetail.order,
                imagen:
                  pokemonDetail.sprites.other["official-artwork"].front_default,
              },
            ]);
          }
        })();
      }
      setLoading(false);
    }, [auth])
  );

  return (
    <SafeAreaView style={styles.root}>
      {!auth ? (
        <Text>Usuario no logeado</Text>
      ) : (
        <>
          {loading ? (
            <ScrollView style={styles.pokemonList}>
              <Text style={styles.title}>Favoritos</Text>
              <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                style={{ width: "100%", marginBottom: 16 }}
                numColumns={2}
                keyExtractor={(item) => item}
                renderItem={() => <View style={styles.skeleton} />}
              />
            </ScrollView>
          ) : (
            <ScrollView style={styles.pokemonList}>
              <Text style={styles.title}>Favoritos</Text>
              <PokemonList pokemons={pokemons} />
            </ScrollView>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {},
  pokemonList: {
    width: "100%",
    paddingHorizontal: 16,
  },
  title: {
    textTransform: "uppercase",
    color: "#808080",
    fontWeight: "bold",
    letterSpacing: 4,
    fontSize: 20,
    marginVertical: 24,
    paddingHorizontal: 8,
  },
  skeleton: {
    flex: 1,
    height: 140,
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#d5d5d5",
  },
});

export default FavoriteScreen;
