import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";

import NavBar from "./NavBar";

const Cardapio = ({ navigation }) => {
  const [idMesa, setIdMesa] = useState("");
  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      setIdMesa(result);
    } else {
      console.log("Nao foi encontrado valor para a key");
    }
  }

  useEffect(() => {
    getValueFor("mesa");
  }, []);

  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} nome="CARDÁPIO" />
      <View style={styles.header}>
        <Text style={styles.titulo}>MESA {idMesa}</Text>
      </View>
      <View style={styles.categoriesContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#091014",
    display: "flex",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Cardapio;
