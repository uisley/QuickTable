import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import NavBar from "./NavBar";

const Cardapio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} nome="CARDÁPIO" />
      <View style={styles.header}>
        <Text style={styles.titulo}>MESA X</Text>
      </View>
      <View style={styles.categoriesContainer}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#091014",
    display: 'flex',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
})

export default Cardapio