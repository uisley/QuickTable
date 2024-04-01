import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './components/TelaInicial';
import Cardapio from './components/Cardapio';

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
            headerTitle: 'Bem vindo!', // Set the header title
            headerStyle: {
              backgroundColor: '#000', // Set header background color to black
              // Use a custom component for more styling options
              // headerTitle: (props) => <CustomHeaderTitle {...props} />,
            },
            headerTintColor: 'orange', // Set header text color to orange
            headerTitleStyle: {
              textAlign: 'center', // Center the header title
            },
          }}
        />
        <Stack.Screen name="Cardapio" component={Cardapio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
