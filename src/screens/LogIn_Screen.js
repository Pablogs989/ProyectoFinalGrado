import React, { useState } from "react";
import { Dimensions, StyleSheet, View, KeyboardAvoidingView, } from "react-native";
import { Surface, Provider, TextInput, Text, HelperText, } from "react-native-paper";
import { authentication } from "../utils/Authentication";
import { api } from "../utils/Api";
import Appbar_Common from "../components/Appbar_Common";
import md5 from "md5";
import Button_Medium from "../components/Button_Medium";
import axios from "axios";
import { useTranslation } from "react-i18next";

const LogIn_Screen = ({ navigation }) => {
  const { t } = useTranslation();
  //Login
  const login = (email, password) => {
    axios
      .post(api.post, {
        type: "authentication",
        email: email,
        password: md5(password),
      })
      .then((response) => {
        navigation.navigate("Main_Screen");
        // console.log(response.data);
        authentication.id = response.data;
        authentication.authenticated = true;
      })
      .catch((error) => {
        if (error != undefined) {
          if (error.response.status == 404) {
            setAxiosError(t("Login_Screen_Error"));
          }
        }
      });
  };
  //Logic error login
  const [axiosError, setAxiosError] = useState("");

  // Logic Email input
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

  //Logic Password
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
        onPress={() => navigation.navigate("Welcome_Screen")}
        title={t("Text_Login")}
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
                label={t("Sign_Up_Email")}
                placeholder={t("Palceholder_Email")}
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
                label={t("Sign_Up_Password")}
                placeholder={t("Palceholder_Password")}
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
                title={t("Login_Screen_Button_Text")}
                onPress={() => login(email, password)}
                description={t("Login_Screen_Button_Text")}
              />
            </View>
            <View style={styles.register_Box}>
              <Text>{t("Login_Screen_Text")} </Text>
              <Text
                style={styles.register_Button}
                onPress={() => navigation.navigate("SignUp_Screen")}
              >
                {t("Text_Register")}
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
