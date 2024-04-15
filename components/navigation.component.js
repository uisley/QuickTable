import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./home.component";
import { DetailsScreen } from "./details.component";
import { ReportarA } from "./reportarA.component";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Details" component={DetailsScreen} />
    <Screen name="ReportarA" component={ReportarA} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
