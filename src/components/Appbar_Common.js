import React from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';
import {Appbar, Avatar} from 'react-native-paper';
// import IconAD from 'react-native-vector-icons/AntDesign';

const Appbar_Pantallas = (props) => {
    return(
        <Appbar.Header style={styles.fondo}>
            <Appbar.BackAction onPress={props.alPresionar} />
            <Appbar.Content title={props.titulo} style={{alignItems:"center"}}/>
            {/* <Avatar.Image size={40} style={{marginRight:10}} source={require('../assets/logoFlorida.jpg')} /> */}
            {/* <Appbar.Action icon="account" size={30} onPress={()=>{}}/> */}
            <Image source={require("../assets/logoPequenyoColorInvertido.png")} 
                style={{ maxHeight: Dimensions.get("window").width * 10 / 100, 
                   maxWidth: Dimensions.get("window").width * 10 / 100, 
                   marginLeft:Dimensions.get("window").width * 4 / 100,
                   marginRight:Dimensions.get("window").width * 2 / 100 }} />
        </Appbar.Header>
    );
}

export default Appbar_Common;

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#26528C',
    },

})