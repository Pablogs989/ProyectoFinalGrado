import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const Button_Medium = (props) => {
    return (
        <Button 
            mode="outlined" 
            color="black" 
            title={props.titulo} 
            onPress={props.alPresionar} 
            style={styles.boton}
            >
            {props.descripcion}
        </Button>
    );
}

export default Button_Medium;

const styles = StyleSheet.create({
    boton:{
        backgroundColor: '#F6C602',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 11,
        marginVertical: 10,
        padding: 0,
        width: 150,
        elevation: 10,
    },
})