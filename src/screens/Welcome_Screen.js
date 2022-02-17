import React from 'react';
import { Dimensions, StyleSheet, View, Image, Text } from 'react-native';
import { Provider } from 'react-native-paper';
import Button_Medium from '../components/Button_Medium';
import Button_EmbeddedText from '../components/Button_EmbeddedText';

import { useTranslation } from "react-i18next";

const Welcome_Screen = ({ navigation: { navigate } }) => {

    const { t } = useTranslation();
    const welcome_Screen = t("Welcome_Screen", { returnObjects: true });
    return (
        <Provider>
            <View style={styles.box}>
                <View style={styles.imageFLex}>
                    <Image style={styles.image} source={require('../assets/Logo.png')} />
                </View>

                <View style={styles.description}>

                    <Text
                        numberOfLines={3}
                        adjustsFontSizeToFit
                        style={styles.subheading}
                    >
                        {t("Welcome_Screen_Title")}
                    </Text>
                    <Text
                        numberOfLines={4}
                        adjustsFontSizeToFit
                        style={styles.subheading}
                    >
                        {t("Welcome_Screen_SubTitle")}
                    </Text>


                </View>
                <View style={styles.buttons}>
                    <View style={styles.box_doubleButton_Mediano}>
                        <Button_Medium title={t("Text_Login")} onPress={() => navigate('SignUp_Screen')} description={t("Text_Register")} />
                        <Button_Medium title={t("Text_Login")} onPress={() => navigate('LogIn_Screen')} description={t("Text_Login")} />
                    </View>
                    <Button_EmbeddedText
                        onPress={() => navigate('PrivacyPolicy_Screen')} description={t("Privacy_Policy")} />
                </View>
            </View>
        </Provider>
    );
}

export default Welcome_Screen;

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: '#26528C',
        height: Dimensions.get("screen").height,
        alignItems: "stretch"
    },

    imageFLex: {
        flex: 5,
        justifyContent: "flex-end",
        alignItems: "center",
    },

    image: {
        // maxHeight: Dimensions.get("window").width * 60 / 100,
        // maxWidth: Dimensions.get("window").width * 80 / 100,

    },

    description: {
        flex: 5,
        paddingVertical: Dimensions.get("window").height * 5 / 100,
        paddingHorizontal: Dimensions.get("window").width * 6 / 100,
        justifyContent: "center",
    },

    subheading: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        paddingVertical: Dimensions.get("window").height * 1 / 100,
    },

    buttons: {
        flex: 2,
    },

    box_doubleButton_Mediano: {
        flexDirection: "row",
        borderWidth: 0,
        justifyContent: "space-evenly",
        elevation: 0,

    },
})