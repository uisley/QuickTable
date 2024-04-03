import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import NavBar from "./NavBar";

const TelaInicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} nome="BEM VINDO!" />
      <View style={styles.content}>
        <Image source={require('../Content/logo.png')} style={styles.logo} />
        <View style={styles.buttonsContainer}>
          <Button title="Ler QR Code" style={styles.button} />
          <Button title="Cardápio" style={styles.button} onPress={() => navigation.navigate('Cardapio')} />
        </View>
        {/* <View style={styles.loginButtonContainer}>
          <Button title="Login" style={styles.loginButton} />
        </View> */}
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
  content: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 40,
  },
  buttonsContainer: {
    flexDirection: 'row-wrap',
    justifyContent: 'space-around',
    height: 80,
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  loginButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  logo: {
    width: '100%',
    height: '30%',
    marginBottom: 30,
  },
});

export default TelaInicial;
