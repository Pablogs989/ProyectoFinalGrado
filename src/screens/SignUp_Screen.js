import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Appbar, Caption ,Button, Headline, Paragraph, Provider, Surface, Subheading, Text, Title} from 'react-native-paper';
import Appbar_Common from '../components/Appbar_Common';


const SignUp_Screen = ({navigation}) => {
    return (
        <Provider>
            <Appbar_Common alPresionar={() => navigation.navigate("Main_Screen")} titulo="Sign Up" />
            <View style={styles.box}>
                <Surface style={styles.falseCard}>
                    


                    
                </Surface>
            </View>
        </Provider>
    );
}

export default SignUp_Screen;

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
    }
})
