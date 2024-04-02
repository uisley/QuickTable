import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

import NavBar from "./NavBar";

const Cardapio = ({ navigation }) => {
  const [idMesa, setIdMesa] = useState("");
  const [data, setData] = useState([]);

  const DataCard = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.nome}</Text>
        <Text style={styles.category}>
          Categoria: {item.categoria.categoria}
        </Text>
        <Text style={styles.price}>Preço: R${item.preco}</Text>
      </View>
    );
  };

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      setIdMesa(result);
    } else {
      console.log("Nao foi encontrado valor para a key");
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://quicktable-back.onrender.com/cardapio"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getValueFor("mesa");
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} nome="CARDÁPIO" />
      <View style={styles.header}>
        <Text style={styles.titulo}>MESA {idMesa}</Text>
      </View>
      <View style={styles.categoriesContainer}>
        <View style={styles.pratos}>
          {data.map((item) => (
            <DataCard key={item.id} item={item} />
          ))}
        </View>
      </View>
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#fff",
  },
  category: {
    marginBottom: 4,
    fontSize: 13,
    color: "#fff",
  },
  price: {
    marginBottom: 8,
    color: "#fff",
  },
  card: {
    margin: 5,
    backgroundColor: 'gray',
    padding: 10,
  },
});

export default Cardapio;
