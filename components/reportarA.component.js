import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import {
  Divider,
  Icon,
  Layout,
  List,
  ListItem,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import axios from "axios";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const ReportarA = ({ navigation }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://192.168.18.7:3000/problemas");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const renderItem = ({ item }) => (
    <ListItem title={item.title} description={item.description} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TopNavigation
        alignment="center"
        accessoryLeft={BackAction}
        style={{ paddingTop: 40, backgroundColor: "rgba(0, 149, 255, 0.48)" }}
      /> */}
      <Layout style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.viewHeader}>
          <Text style={styles.text} category="h2">
            Qual o Tipo de Problema que você encontrou e gostaria de reportar?
          </Text>
        </View>
        <View style={{ width: "100%", paddingBottom: 165 }}>
          <List
            style={styles.container}
            data={data}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
          />
        </View>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewHeader: {
    backgroundColor: "rgba(0, 149, 255, 0.48)",
    alignItems: "center",
    padding: 12,
    paddingBottom: 30,
    paddingTop: 80,
    width: "100%",
  },
  container: {
    minHeight: 200,
  },
});
