import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import {
  Button,
  Card,
  Divider,
  Layout,
  Text,
  TopNavigation,
} from "@ui-kitten/components";

export const HomeScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate("ReportarA");
  };

  const imgNoticia = require("../Content/jornal.png");
  const imgPesquisa = require("../Content/noticia.png");
  const imgReportar = require("../Content/reportar.png");

  const Header = (props) => (
    <View {...props}>
      <Text category="h6">{text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TopNavigation title="MyApp" alignment="center" />
      <Divider /> */}
      <Layout style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.viewHeader}>
          <Text style={styles.text} category="h2">
            Olá, Seja Bem Vindo ao iCity, o que você gostaria de fazer?
          </Text>
        </View>
        <View>
          <Card style={styles.card} status="danger" onPress={navigateDetails}>
            <ImageBackground source={imgReportar} resizeMode="cover">
              <View style={{ padding: 15 }}>
                <Text category="h5">Reportar</Text>
                <Text style={{ width: 150 }} category="s1">
                  Clique para reportar problemas para corrigirem na cidade!
                </Text>
              </View>
            </ImageBackground>
          </Card>
          <Card style={styles.card} status="info">
            <ImageBackground source={imgNoticia} resizeMode="cover">
              <View style={{ padding: 15 }}>
                <Text category="h5">Noticias</Text>
                <Text style={{ width: 150 }} category="s1">
                  Clique para acessar as ultimas noticias da cidade!
                </Text>
              </View>
            </ImageBackground>
          </Card>
          <Card style={styles.card} status="success">
            <ImageBackground source={imgPesquisa} resizeMode="cover">
              <View style={{ padding: 15 }}>
                <Text category="h5">Pesquisa</Text>
                <Text style={{ width: 150 }} category="s1">
                  Clique para realizar as ultimas pesquisas da cidade!
                </Text>
              </View>
            </ImageBackground>
          </Card>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    margin: 2,
  },
  image: {
    width: 120,
    height: 100,
    resizeMode: "cover",
    backgroundColor: "blue",
  },
  viewHeader: {
    backgroundColor: "rgba(0, 149, 255, 0.48)",
    paddingTop: 80,
    alignItems: "center",
    padding: 12,
    paddingBottom: 30,
  },
  card: {
    width: 400,
    height: 150,
    marginTop: 10,
  },
});
