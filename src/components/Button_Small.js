import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const Button_Small = (props) => {
    return (
        <Button
            mode="outlined"
            color="black"
            title={props.title}
            onPress={props.onPress}
            style={styles.button}
        >
            {props.descripcion}
        </Button>
    );
}

export default Button_Small;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F6C602',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 11,
        marginVertical: 10,
        padding: 0,
        elevation: 10,
    },
})