import { View, Text, Dimensions, Button } from 'react-native'
import React from 'react'
import Home from "./src/screens/container/Home";
import StyleSheetPreview from './src/css-learn/StyleSheetPreview';
import RefactorHtml from './src/css-learn/RefactorHtml';
import Challenge from './src/css-learn/Challenge';
import ExampleLayout from './src/layout-learn/ExampleLayout';
import VerticalStackLayout from './src/layout-learn/VerticalStackLayout';
import Reto from './src/layout-learn/Reto';
import GridLayout from './src/layout-learn/GridLayout';

import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/container/Login";


function HomeScreen ({navigation}) {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Home Screen</Text>
    </View>
  );
}


function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Details Screen</Text>
      {/*<Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />*/}
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
