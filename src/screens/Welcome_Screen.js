import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Appbar, Caption ,Button, Headline, Paragraph, Provider, Subheading, Surface, Text, Title} from 'react-native-paper';
import Appbar_Common from '../components/Appbar_Common';
import Button_Medium from '../components/Button_Medium';


const Welcome_Screen = ({navigation}) => {

    return (
        <Provider>
            <Appbar_Common alPresionar={() => navigation.navigate("Main_Screen")} titulo="Welcome" />
            <View style={styles.box}>
                {/* <View style={styles.falseCard}> */}
                <View>
                    


                    
                </View>
                <View style={styles.box_doubleButton_Mediano}>
                    <Button_Medium  titulo="Registrar" alPresionar={() => navigate('SignUp_Screen')} descripcion="Registrar" />
                    <Button_Medium  titulo="Iniciar Sessió" alPresionar={() => navigate('LogIn_Screen')} descripcion="IniciarSessio" />
                </View>
            </View>
        </Provider>
    );
}

export default Welcome_Screen;

const styles = StyleSheet.create({
    box:{
        flex:1,
        backgroundColor: '#26528C',
        height: Dimensions.get("screen").height,
        alignItems: "center"
    },

    falseCard:{
        backgroundColor:'#A7CAD9',
        borderRadius:20,
        height: Dimensions.get("screen").height*81/100,
        width: Dimensions.get("screen").width*90/100,
        marginTop: Dimensions.get("screen").height*2/100,
        padding: 10
    },
    box_doubleButton_Mediano:{
        flexDirection: "row",
        backgroundColor: "#26528C",
        borderWidth: 0,
        paddingBottom: 20,
        justifyContent: "space-evenly",
        elevation: 0,
    },
})