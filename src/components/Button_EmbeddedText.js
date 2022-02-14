import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Button_EmbeddedText = (props) => {
    return (
        <Button
            color='white'
            title={props.title}
            onPress={props.onPress}
            style={styles.button}
        >
            {props.description}
        </Button>
    );
}

export default Button_EmbeddedText;

const styles = StyleSheet.create({
    button: {
        color: 'white',
    },
})