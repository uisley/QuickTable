import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaInicial from "./components/TelaInicial";
import Cardapio from "./components/Cardapio";
import Carrinho from "./components/Carrinho";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: "black" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={TelaInicial}
          options={{
            headerTitle: "Bem vindo!",
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "orange",
            headerTitleStyle: {
              textAlign: "center",
            },
          }}
        />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
