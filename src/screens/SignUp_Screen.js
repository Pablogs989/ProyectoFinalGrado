import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from "react-native";
import {
  Provider,
  Surface,
  TextInput,
  HelperText,
  Portal,
  Dialog,
  ActivityIndicator
} from "react-native-paper";
import Appbar_Common from "../components/Appbar_Common";
import Button_Medium from "../components/Button_Medium";
import { api } from "../utils/Api";
import axios from "axios";
import md5 from "md5";

const SignUp_Screen = ({ navigation }) => {
  const [creatingUser, setCreatingUser] = useState(false);
  const register = (email, password) => {
    if (
      !hasErrors_Email() &&
      !hasErrors_Password() &&
      !hasErrors_Password_Config()
    ) {
      setCreatingUser(true);
      axios
        .post(api.post, {
          tipo: "checkEmail",
          email: email,
        })
        .then((response) => {
          navigation.navigate("LogIn_Screen");
        })
        .catch((error) => {
          // console.log(error.response.status);
          if (error != undefined) {
            if (error.response.status == 404) {
              axios
                .post(api.post, {
                  tipo: "crearAutenticacio",
                  email: email.toLowerCase(),
                  contrasenya: md5(password),
                })
                .then((response) => {
                  navigation.navigate("Welcome_Screen");
                })
                .catch((error) => { });
            }
          }
        });
    }
    // console.log("boton")
  };

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

  // Lógica entra Password
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
  const hasErrors_Password = () => {
    let passwordErroneo =
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#.])[A-Za-z\d@$!%*?&.]{8,}$/i.test(
        password
      );

    return passwordErroneo;
  };

  // Lógica entra Password_Config
  const [password_Config, setPassword_Config] = useState("");
  const [visible_Password_Config, setVisible_Password_Config] = useState(false);
  const handleOnFocus_Password_Config = () => {
    setVisible_Password_Config(false);
  };
  const handleChangeText_Password_Config = (event) => {
    setPassword_Config(event);
  };
  const handleOnBlur_Password_Config = () => {
    setVisible_Password_Config(password_Config.length > 0);
  };
  const handleOnPress_IconClose_Password_Config = () => {
    setPassword_Config("");
  };
  const hasErrors_Password_Config = () => {
    let password_config_Erroneo = !(password_Config === password);
    return password_config_Erroneo;
  };
  return (
    <Provider>
      <Portal>
        <Dialog visible={creatingUser} dismissable={false}>
          <Dialog.Title>Creant Usuari</Dialog.Title>
          <Dialog.Content>
            <ActivityIndicator animating={true} color="#DEB202" size="large" />
          </Dialog.Content>
        </Dialog>
      </Portal>
      <Appbar_Common
        alPresionar={() => navigation.navigate("Welcome_Screen")}
        titulo="Sign Up"
      />
      <View style={styles.box}>
        <Surface style={styles.falseCard}>
          <KeyboardAvoidingView
            behavior="padding"
            style={styles.keyboardAvoidView}
            keyboardVerticalOffset={100}
          >
            <Surface style={styles.box_TextInput}>
              <TextInput
                mode="outlined"
                label={"Email:"}
                placeholder="Introduïsca el email"
                activeOutlineColor="#0702F0"
                keyboardType="email-address"
                onFocus={handleOnFocus_Email}
                onChangeText={handleChangeText_Email}
                value={email}
                autoCapitalize="none"
                onBlur={handleOnBlur_Email}
                right={
                  <TextInput.Icon
                    name="close"
                    onPress={handleOnPress_IconClose_Email}
                  />
                }
              />
              <HelperText
                visible={visible_Email}
                type={hasErrors_Email() ? "error" : "info"}
              >
                {hasErrors_Email()
                  ? "¡¡Error!! El email existix o no cumplix tots els parametres'."
                  : "Email vàlid"}
              </HelperText>
            </Surface>
            <Surface style={styles.box_TextInput}>
              <TextInput
                mode="outlined"
                label={"Contrasenya:"}
                placeholder="Introduïsca la contrasenya"
                activeOutlineColor="#0702F0"
                keyboardType="default"
                onFocus={handleOnFocus_Password}
                onChangeText={handleChangeText_Password}
                value={password}
                secureTextEntry={true}
                autoCapitalize="none"
                onBlur={handleOnBlur_Password}
                right={
                  <TextInput.Icon
                    name="close"
                    onPress={handleOnPress_IconClose_Password}
                  />
                }
              />
              <HelperText
                visible={visible_Password}
                type={hasErrors_Password() ? "error" : "info"}
              >
                {hasErrors_Password()
                  ? "¡¡Error!! La contrasenya no cumplix els parametres de seguretat requerits"
                  : "Contrasenya vàlida"}
              </HelperText>
            </Surface>

            <Surface style={styles.box_TextInput}>
              <TextInput
                mode="outlined"
                label={"Confirma Contrasenya:"}
                placeholder="Confirma la contrasenya"
                activeOutlineColor="#0702F0"
                keyboardType="default"
                onFocus={handleOnFocus_Password_Config}
                onChangeText={handleChangeText_Password_Config}
                value={password_Config}
                secureTextEntry={true}
                autoCapitalize="none"
                onBlur={handleOnBlur_Password_Config}
                right={
                  <TextInput.Icon
                    name="close"
                    onPress={handleOnPress_IconClose_Password_Config}
                  />
                }
              />
              <HelperText
                visible={visible_Password_Config}
                type={hasErrors_Password_Config() ? "error" : "info"}
              >
                {hasErrors_Password_Config()
                  ? "¡¡Error!! La contrasenya no es igual a la de dalt."
                  : "Contrasenya vàlida"}
              </HelperText>
            </Surface>
            <View style={styles.box_doubleButton_Mediano}>
              <Button_Medium
                titulo="Registrar-se"
                alPresionar={() => register(email, password)}
                descripcion="Registar-se"
              />
            </View>
          </KeyboardAvoidingView>
        </Surface>
      </View>
    </Provider>
  );
};

export default SignUp_Screen;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#26528C",
    height: Dimensions.get("screen").height,
    alignItems: "center",
    justifyContent: "center",
  },
  box_TextInput: {
    backgroundColor: "#A7CAD9",
    borderWidth: 0,
    marginHorizontal: 15,
    marginVertical: 0,
    padding: 0,
    elevation: 0,
  },

  falseCard: {
    backgroundColor: "#A7CAD9",
    borderRadius: 20,
    height: (Dimensions.get("window").height * 50) / 100,
    width: (Dimensions.get("window").width * 90) / 100,
    marginTop: (Dimensions.get("window").height * 2) / 100,
    padding: 10,
    justifyContent: "center",
  },
  box_doubleButton_Mediano: {
    alignItems: "center",
    marginBottom: -20,
    marginTop: -10,
  },
  keyboardAvoidView: {
    flex: 1,
    justifyContent: "center",
  },
});
