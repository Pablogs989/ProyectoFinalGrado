import { StatusBar } from 'expo-status-bar';

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ColeccionCreate_Screen from './src/screens/ColeccionCreate_Screen';
import DocInput_Screen from './src/screens/DocInput_Screen';
import DocPreview_Screen from './src/screens/DocPreview_Screen';
import DocRegister_Screen from './src/screens/DocRegister_Screen';
import DocViewer_Screen from './src/screens/DocViewer_Screen';
import LogIn_Screen from './src/screens/LogIn_Screen';
import Main_Screen from './src/screens/Main_Screen';
import SignUp_Screen from './src/screens/SignUp_Screen';
import Welcome_Screen from './src/screens/Welcome_Screen';
import Filter_MainScreen_MD from './src/screens/Filter_MainScreen_MD';
import PrivacyPolicy_Screen from './src/screens/PrivacyPolicy_Screen';


const PilaNavegacio = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <PilaNavegacio.Navigator screenOptions={{ headerShown: false}} initialRouteName="DocRegister_Screen">
      <PilaNavegacio.Group>
        <PilaNavegacio.Screen name="Main_Screen" component={Main_Screen} />
        <PilaNavegacio.Screen name="ColeccionCreate_Screen" component={ColeccionCreate_Screen} />
        <PilaNavegacio.Screen name="DocInput_Screen" component={DocInput_Screen} />
        <PilaNavegacio.Screen name="DocPreview_Screen" component={DocPreview_Screen} />
        <PilaNavegacio.Screen name="DocRegister_Screen" component={DocRegister_Screen} />
        <PilaNavegacio.Screen name="DocViewer_Screen" component={DocViewer_Screen} />
        <PilaNavegacio.Screen name="LogIn_Screen" component={LogIn_Screen} />
        <PilaNavegacio.Screen name="SignUp_Screen" component={SignUp_Screen} />
        <PilaNavegacio.Screen name="Welcome_Screen" component={Welcome_Screen} />
        <PilaNavegacio.Screen name="PrivacyPolicy_Screen" component={PrivacyPolicy_Screen} />
      </PilaNavegacio.Group>
      <PilaNavegacio.Group screenOptions={{presentation: 'transparentModal'}}>
        <PilaNavegacio.Screen name="Filter_MainScreen_MD" component={Filter_MainScreen_MD} />
      </PilaNavegacio.Group>
    </PilaNavegacio.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

