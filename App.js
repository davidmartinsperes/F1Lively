import React from "react";
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from '@react-navigation/stack';
import InfoF1 from "./components/F1Info";
import InfoGrid from "./components/Grid";

const Stack = createStackNavigator();
// Está importando o stack navigator pelo react navigation e todos os componentes do InfoF1 e InfoGrid
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>


        <Stack.Screen name="Home"
          component={InfoF1} />




        <Stack.Screen name="Grid"
          component={InfoGrid}
          options={{ title: "Grid de 2025" }} />







      </Stack.Navigator>
    </NavigationContainer>

  );
}