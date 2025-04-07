import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import InfoF1 from "./components/F1Info";
import InfoGrid from "./components/Grid";
import FanArea from "./components/FaArea"; // Renomeado para maior clareza

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={InfoF1}
        />
        <Stack.Screen
          name="Grid"
          component={InfoGrid}
          options={{ title: "Grid de 2025" }}
        />
        <Stack.Screen
          name="FaArea"
          component={FanArea}
          options={{ title: "Fãs" }}

        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
