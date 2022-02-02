import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

const Appbar_Pantallas = (props) => {
    return(
        <Appbar.Header style={styles.fondo}>
            <Appbar.BackAction onPress={props.alPresionar} />
            <Appbar.Content title={props.titulo} />
        </Appbar.Header>
    );
}

export default Appbar_Pantallas;


const styles = StyleSheet.create({
    fondo:{
        backgroundColor: '#26528C',
    },
    
})