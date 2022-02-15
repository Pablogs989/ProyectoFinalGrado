

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
import DocUpdateRemove_Screen from './src/screens/DocUpdateRemove_Screen';

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";


const PilaNavegacio = createNativeStackNavigator();

const valencia = require("./src/lang/va.json");
const english = require("./src/lang/en.json");

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: english,
      va: valencia,
    },
    lng: "va", // if you're using a language detector, do not define the lng option
    fallbackLng: "va",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export default function App() {

  

  // const types = t("lol", { returnObjects: true });
  const language = i18n.language;

  return (
    <NavigationContainer>
      <PilaNavegacio.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome_Screen">
        <PilaNavegacio.Group>
          <PilaNavegacio.Screen name="Main_Screen" component={Main_Screen} />
          <PilaNavegacio.Screen name="ColeccionCreate_Screen" component={ColeccionCreate_Screen} />
          <PilaNavegacio.Screen name="DocInput_Screen" component={DocInput_Screen} />
          <PilaNavegacio.Screen name="DocPreview_Screen" component={DocPreview_Screen} />
          <PilaNavegacio.Screen name="DocRegister_Screen" component={DocRegister_Screen} />
          <PilaNavegacio.Screen name="DocViewer_Screen" component={DocViewer_Screen} />
          <PilaNavegacio.Screen name="DocUpdateRemove_Screen" component={DocUpdateRemove_Screen} />
          <PilaNavegacio.Screen name="LogIn_Screen" component={LogIn_Screen} />
          <PilaNavegacio.Screen name="SignUp_Screen" component={SignUp_Screen} />
          <PilaNavegacio.Screen name="Welcome_Screen" component={Welcome_Screen} />
          <PilaNavegacio.Screen name="PrivacyPolicy_Screen" component={PrivacyPolicy_Screen} />
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

