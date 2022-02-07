import React from 'react';
import {Button} from 'react-native-paper';

const Button_EmbeddedText = (props) => {
    return (
        <Button
            title={props.titulo}
            onPress={props.alPresionar}
            >
            {props.descripcion}
        </Button>
    );
}

export default Button_EmbeddedText;

