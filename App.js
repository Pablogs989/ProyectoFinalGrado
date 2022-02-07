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
import PrivacyPolicy_Screen from './src/screens/PrivacyPolicy_Screen';


const PilaNavegacio = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PilaNavegacio.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome_Screen">
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
      </PilaNavegacio.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
