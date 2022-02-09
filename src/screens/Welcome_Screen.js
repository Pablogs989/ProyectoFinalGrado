import React from 'react';
import { Dimensions, StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Appbar, Caption, Button, Paragraph, Provider, Subheading, Surface, Text, Title } from 'react-native-paper';
import Appbar_Common from '../components/Appbar_Common';
import Button_Medium from '../components/Button_Medium';
import Button_EmbeddedText from '../components/Button_EmbeddedText';


const Welcome_Screen = ({ navigation: {navigate} }) => {

    return (
        <Provider>
            <View style={styles.box}>
                <View style={styles.imageFLex}>
                    <Image style={styles.image} source={require('../assets/Logo.png')} />
                </View>

                <View style={styles.description}>
                    <Subheading style={styles.subheading}></Subheading>
                    <Subheading style={styles.subheading}>Una App per gestionar tots els</Subheading>
                    <Subheading style={styles.subheading}>documents necesaris</Subheading>
                    <Subheading style={styles.subheading}>per al teu viatge.</Subheading>
                    <Subheading style={styles.subheading}>Una App per a trobar-los, una</Subheading>
                    <Subheading style={styles.subheading}>App per a atraure'ls a tots i</Subheading>
                    <Subheading style={styles.subheading}>lligar-los en les tenebres en la</Subheading>
                    <Subheading style={styles.subheading}>Terra de Mordor on s'estenen</Subheading>
                    <Subheading style={styles.subheading}>les Ombres.</Subheading>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.box_doubleButton_Mediano}>
                        <Button_Medium titulo="Registrar" alPresionar={() => navigate('SignUp_Screen')} descripcion="Registrar" />
                        <Button_Medium titulo="Iniciar Sessió" alPresionar={() => navigate('LogIn_Screen')} descripcion="Iniciar Sesió" />
                    </View>
                    <Button_EmbeddedText titulo="PoliticaPrivacitat" alPresionar={() => navigate('PrivacyPolicy_Screen')} descripcion="Politica de privacitat"></Button_EmbeddedText>
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
    },

    subheading: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        padding: 1
    },

    image: {
        marginTop: 100,
        height: 200,
        width: 310,
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
        paddingVertical: Dimensions.get("window").height*2/100,
        justifyContent: "space-evenly",
        elevation: 0,
        width: Dimensions.get("window").width*100/100,
    },
})