import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar, Avatar} from 'react-native-paper';
// import IconAD from 'react-native-vector-icons/AntDesign';

const Appbar_MainScreen = (props) => {
    return(
        <Appbar.Header style={styles.fondo}>
            <Appbar.BackAction onPress={props.alPresionar} />
            <Appbar.Content title={props.titulo} style={{alignItems:"center"}}/>
            {/* <Avatar.Image size={40} style={{marginRight:10}} source={require('../assets/logoFlorida.jpg')} /> */}
            <Appbar.Action icon="account" size={30} onPress={()=>{}}/>
        </Appbar.Header>
    );
}

export default Appbar_MainScreen;


const styles = StyleSheet.create({
    fondo:{
        backgroundColor: '#26528C',
    },
    
})