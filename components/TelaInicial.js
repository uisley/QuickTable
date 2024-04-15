import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import NavBar from "./NavBar";
import { CameraView, Camera } from "expo-camera/next";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const TelaInicial = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [abrirCamera, setAbrirCamera] = useState(false);
  const [name, setName] = useState("BEM VINDO!");
  const [nomeDigitado, setNomeDigitado] = useState("");
  const [botaoHabilitado, setBotaoHabilitado] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getBarCodeScannerPermissions();
  }, []);

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  const renderCamera = () => {
    <View style={styles.cameraContainer}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeScannerSettings={{
          barCodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      ;
    </View>;
  };

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);

    console.log("QR code detectado!");

    const url = `https://quicktable-back.onrender.com/reservas/entrarNaReserva/${data}`;
    try {
      const response = await axios.post(url);

      if (response.status == 200) {
        console.info("Entrou na reserva");
        save("mesa", data);
        save("reserva", String(response.data.id));
        save("nome", nomeDigitado);

        navigation.navigate("Cardapio");
      } else {
        console.error("Erro ao entrar na reserva");
        console.error(response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera permission not granted</Text>
      </View>
    );
  }

  const handleNomeChange = (text) => {
    setNomeDigitado(text);
    setBotaoHabilitado(text.length > 0);
  };

  return (
    <View style={styles.container}>
      {abrirCamera ? (
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barCodeScannerSettings={{
            barCodeTypes: ["qr", "pdf417"],
          }}
          style={StyleSheet.absoluteFillObject}
        />
      ) : null}
      <NavBar navigation={navigation} nome="BEM VINDO!" />
      <View style={styles.content}>
        {!abrirCamera ? (
          <Image source={require("../Content/logo.png")} style={styles.logo} />
        ) : null}

        {!abrirCamera ? (
          <View style={styles.buttonsContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite o seu nome"
              value={nomeDigitado}
              onChangeText={handleNomeChange}
            />
            <Pressable
              style={[
                styles.button,
                ,
                !botaoHabilitado && styles.buttonDisabled,
              ]}
              onPress={() => {
                setScanned(false);
                setAbrirCamera(true);
                setName("LEIA UM QR CODE");
              }}
              disabled={!botaoHabilitado}
            >
              <Text style={styles.btn_text_imagem}>Ler QR Code</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Cardapio")}
            >
              <Text style={styles.btn_text_imagem}>Cardápio</Text>
            </Pressable>
          </View>
        ) : null}

        {/* {!abrirCamera ? (
          <View style={styles.loginButtonContainer}>
            <Button title="Login" style={styles.loginButton} />
          </View>
        ) : null} */}
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
  content: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "orange",
    marginBottom: 40,
  },
  buttonsContainer: {
    flexDirection: "row-wrap",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#006b3b",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    width: 150,
  },
  buttonDisabled: {
    backgroundColor: "#003f22", // Cor mais escura
  },
  loginButtonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  logo: {
    width: "100%",
    height: "30%",
    marginBottom: 30,
  },
  cameraContainer: {
    width: "80%",
    aspectRatio: 1,
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 40,
  },
  btn_text_imagem: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  input: {
    width: 150,
    height: 40,
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    color: "black",
    borderRadius: 5,
    marginLeft: 10,
  },
});

export default TelaInicial;
