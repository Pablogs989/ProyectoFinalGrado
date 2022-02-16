import React, { useState } from "react";
import {
  Dimensions, StyleSheet, View, KeyboardAvoidingView, Text
} from "react-native";
import {
  Provider, Surface, TextInput, HelperText, Portal, Dialog, ActivityIndicator, Checkbox
} from "react-native-paper";
import { api } from "../utils/Api";
import Appbar_Common from "../components/Appbar_Common";
import Button_Medium from "../components/Button_Medium";
import axios from "axios";
import md5 from "md5";

import { useTranslation } from "react-i18next";

const SignUp_Screen = ({ navigation }) => {
  const [creatingUser, setCreatingUser] = useState(false);
  const register = (email, password) => {
    if (
      !hasErrors_Email() &&
      !hasErrors_Password() &&
      !hasErrors_Password_Config() &&
      checked
    ) {
      setCreatingUser(true);
      axios
        .post(api.post, {
          type: "checkEmail",
          email: email,
        })
        .then((response) => {
          navigation.navigate("LogIn_Screen");
        })
        .catch((error) => {
          if (error != undefined) {
            if (error.response.status == 404) {
              axios
                .post(api.post, {
                  type: "createAuthentication",
                  email: email.toLowerCase(),
                  password: md5(password),
                })
                .then((response) => {
                  navigation.navigate("Welcome_Screen");
                })
                .catch((error) => { });
            }
          }
        });
    }
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
    let emailError = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    return emailError;
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
    let passwordError =
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#.])[A-Za-z\d@$!%*?&.]{8,}$/i.test(
        password
      );

    return passwordError;
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
    let password_config_Error = !(password_Config === password);
    return password_config_Error;
  };
  // Lógica entra checkboox
  const [checked, setChecked] = React.useState(false);

  const { t } = useTranslation();
  return (
    
    <Provider>
      <Appbar_Common
        onPress={() => navigation.navigate("Welcome_Screen")}
        title={t("Sign_Up")}
      />
      <View style={styles.box}>
        <Surface style={styles.falseCard}>
          <KeyboardAvoidingView
            behavior="padding"
            style={styles.keyboardAvoidView}
            keyboardVerticalOffset={50}
          >
            <Surface style={styles.box_TextInput}>
              <TextInput
                mode="outlined"
                label={t("Sing_Up_Email")}
                placeholder={t("Palceholder_Email")}
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
                  ? t("Sing_Up_Email_HasError")
                  : t("Sing_Up_Email_HasCorrect")}
              </HelperText>
            </Surface>
            <Surface style={styles.box_TextInput}>
              <TextInput
                mode="outlined"
                label={t("Sing_Up_Password")}
                placeholder={t("Palceholder_Password")}
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
                  ? t("Sing_Up_Password_HasError")
                  : t("Sing_Up_Password_HasCorrect")}
              </HelperText>
            </Surface>

            <Surface style={styles.box_TextInput}>
              <TextInput
                mode="outlined"
                label={t("Sing_Up_Password_Confirm")}
                placeholder={t("Palceholder_Password_Confirm")}
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
                  ? t("Sing_Up_Password_Confirm_HasError")
                  : t("Sing_Up_Password_Confirm_HasCorrect")}
              </HelperText>
              <View style={styles.checkbox}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  color="orange"
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text
                  style={styles.register_Button}
                  onPress={() => navigation.navigate('PrivacyPolicy_Screen')}
                  >
                    {t("Privacy_Policy")}
                  </Text>               
              </View>

            </Surface>
            <View style={styles.box_doubleButton_Medium}>
              <Button_Medium
                title={t("Text_Register")}
                onPress={() => register(email, password)}
                description={t("Text_Register")}
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
    height: (Dimensions.get("window").height * 55) / 100,
    width: (Dimensions.get("window").width * 90) / 100,
    marginTop: (Dimensions.get("window").height * 2) / 100,
    padding: 10,
    justifyContent: "center",
  },
  box_doubleButton_Medium: {
    alignItems: "center",
    marginBottom: 0,
    marginTop: 0,
  },
  keyboardAvoidView: {
    flex: 1,
    justifyContent: "center",
  },
  checkbox: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems:"baseline",
  },

  register_Button: {
    color: "#26528C",
    textDecorationLine: "underline",
  },
});
