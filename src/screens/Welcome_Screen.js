import React from 'react';
import { Dimensions, StyleSheet, View, Image,Text } from 'react-native';
import { Provider} from 'react-native-paper';
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
                
                {welcome_Screen.map((text, index) => {
            
                          return <Text style={styles.subheading}>{text}</Text>
                            
                        })}

                    
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
        alignItems: "center"
    },


    description: {
        flex: 4,
        paddingTop:40
    },

    subheading: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        padding: 1,
        lineHeight: 15,
        paddingTop:22,
    },

    image: {
        marginTop: 100,
        height: 225,
        width: 315,
    },

    imageFLex: {
        flex: 4,
    },

    buttons: {
        flex: 2,
    },

    box_doubleButton_Mediano: {
        flexDirection: "row",
        backgroundColor: "#26528C",
        borderWidth: 0,
        paddingVertical: Dimensions.get("window").height * 2 / 100,
        justifyContent: "space-evenly",
        elevation: 0,
        width: Dimensions.get("window").width * 100 / 100,
    },
})