import React from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';


const Button_EmbeddedText = (props) => {
    return (
        <Button
            color = 'white'
            title={props.titulo}
            onPress={props.alPresionar}
            style={styles.button}
            >
            {props.descripcion}
        </Button>
    );
}



export default Button_EmbeddedText;

const styles = StyleSheet.create({
    button: {
        color: 'white',
    },
})