import React from 'react';
import { Dimensions, StyleSheet, View, ScrollView } from 'react-native';
import { Surface, Provider, Text, Title } from 'react-native-paper';
import Appbar_Common from '../components/Appbar_Common';
import { useTranslation } from "react-i18next";


const LogIn_Screen = ({ navigation }) => {
    const { t } = useTranslation();
    const privacyPolicy = t("Text_PrivacyPolicy", { returnObjects: true });
    return (
        <Provider>
            <Appbar_Common onPress={() => navigation.navigate("Welcome_Screen")} title="Politica de privacitat" />
            <View style={styles.box}>
                <Surface style={styles.falseCard}>
                    <ScrollView>
                        {privacyPolicy.map((text, index) => {
                            if (text.length < 60) {
                                return <Title>{text}</Title>
                            } else {
                                return <Text style={styles.text}>{text}</Text>
                            }
                        })}
                    </ScrollView>



                </Surface>
            </View>
        </Provider>
    );
}

export default LogIn_Screen;


const styles = StyleSheet.create({
    text: {
        padding: 15,
        textAlign: 'justify'
    },

    title: {
        padding: 10
    },

    box: {
        flex: 1,
        backgroundColor: '#26528C',
        height: Dimensions.get("screen").height,
        alignItems: "center"
    },

    falseCard: {
        backgroundColor: '#A7CAD9',
        borderRadius: 20,
        height: Dimensions.get("screen").height * 81 / 100,
        width: Dimensions.get("screen").width * 90 / 100,
        marginTop: Dimensions.get("screen").height * 2 / 100,
        padding: 10
    }
})