import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { Header } from "@react-navigation/native-stack";
import {
  Appbar,
  Caption,
  Button,
  Headline,
  Paragraph,
  Surface,
  Provider,
  Subheading,
  TextInput,
  Text,
  Title,
  HelperText,
} from "react-native-paper";
import Appbar_Common from "../components/Appbar_Common";
import md5 from "md5";
import Button_Medium from "../components/Button_Medium";
import axios from "axios";
import { authentication } from "../utils/Authentication";
import { api } from "../utils/Api";

const LogIn_Screen = ({ navigation }) => {
  //Login
  const login = (email, password) => {
    axios
      .post(api.post, {
        tipo: "autenticacio",
        email: email,
        contrasenya: md5(password),
      })
      .then((response) => {
        navigation.navigate("Main_Screen");
        // console.log(response.data);
        authentication.id = response.data;
        authentication.authenticated = true;
      })
      .catch((error) => {
        // console.log(error.response.status);
        if (error != undefined) {
          if (error.response.status == 404) {
            setAxiosError("Inici de sessio invalid");
          }
        }
      });
    // const response = axios.post("http://40.118.51.225:5000/pi", {
    //   tipo: "autenticacio",
    //   email: email,
    //   contrasenya: md5(password),
    // });
    id = "a";
  };
  //Logica error login
  const [axiosError, setAxiosError] = useState("");

  // Lógica entra Email
  const [email, setEmail] = useState("");
  const [visible_Email, setVisible_Email] = useState(false);
  const handleOnFocus_Email = () => {
    setVisible_Email(false);
  };
  const handleChangeText_Email = (event) => {
    setEmail(event);
  };
  const handleOnBlur_Email = () => {
    setVisible_Email(email.length > 0);
  };
  const handleOnPress_IconClose_Email = () => {
    setEmail("");
  };
  const hasErrors_Email = () => {
    let emailErroneo = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    return emailErroneo;
  };

  //Logica Password
  const [password, setPassword] = useState("");
  const [visible_Password, setVisible_Password] = useState(false);
  const handleOnFocus_Password = () => {
    setVisible_Password(false);
  };
  const handleChangeText_Password = (event) => {
    setPassword(event);
  };
  const handleOnBlur_Password = () => {
    setVisible_Password(password.length > 0);
  };
  const handleOnPress_IconClose_Password = () => {
    setPassword("");
  };

  return (
    <Provider>
      <Appbar_Common
        alPresionar={() => navigation.navigate("Welcome_Screen")}
        titulo="Log In"
      />
      <View style={styles.box}>
        <Surface style={styles.falseCard}>
          <KeyboardAvoidingView
            behavior="padding"
            style={styles.keyboardAvoidView}
            keyboardVerticalOffset={120}
          >
            <Surface style={styles.box_TextInput}>
              <HelperText type="error" style={styles.error}>
                {axiosError}
              </HelperText>

              <TextInput
                mode="outlined"
                label={"Email:"}
                placeholder="Introduïsca el email"
                activeOutlineColor="#0702F0"
                keyboardType="email-address"
                onFocus={handleOnFocus_Email}
                onChangeText={handleChangeText_Email}
                value={email}
                onBlur={handleOnBlur_Email}
                autoCapitalize="none"
                right={
                  <TextInput.Icon
                    name="close"
                    onPress={handleOnPress_IconClose_Email}
                  />
                }
              />
            </Surface>
            <Surface style={styles.box_TextInput}>
              <TextInput
                mode="outlined"
                label={"Contrasenya:"}
                placeholder="Contrasenya"
                activeOutlineColor="#0702F0"
                keyboardType="default"
                onFocus={handleOnFocus_Password}
                onChangeText={handleChangeText_Password}
                value={password}
                onBlur={handleOnBlur_Password}
                secureTextEntry={true}
                autoCapitalize="none"
                right={
                  <TextInput.Icon
                    name="close"
                    onPress={handleOnPress_IconClose_Password}
                  />
                }
              />
            </Surface>
            <View style={styles.box_Button}>
              <Button_Medium
                titulo="Iniciar Sessio"
                alPresionar={() => login(email, password)}
                descripcion="Confirmar"
              />
            </View>
            <View style={styles.register_Box}>
              <Text>No tens compte? </Text>
              <Text
                style={styles.register_Button}
                onPress={() => navigation.navigate("SignUp_Screen")}
              >
                Registrat
              </Text>
            </View>
          </KeyboardAvoidingView>
        </Surface>
      </View>
    </Provider>
  );
};

export default LogIn_Screen;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#26528C",
    height: Dimensions.get("screen").height,
    alignItems: "center",
    justifyContent: "center",
  },

  falseCard: {
    backgroundColor: "#A7CAD9",
    borderRadius: 20,
    height: (Dimensions.get("window").height * 40) / 100,
    width: (Dimensions.get("window").width * 90) / 100,
    marginTop: (Dimensions.get("window").height * 2) / 100,
    padding: 10,
    justifyContent: "center",
  },
  box_TextInput: {
    backgroundColor: "#A7CAD9",
    borderWidth: 0,
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 0,
    elevation: 0,
  },
  box_Button: {
    alignItems: "center",
  },
  register_Box: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  register_Button: {
    color: "#26528C",
    textDecorationLine: "underline",
  },
  error: {
    textAlign: "center",
  },
  keyboardAvoidView: {
    flex: 1,
    justifyContent: "center",
  },
});
