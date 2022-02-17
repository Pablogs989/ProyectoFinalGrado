import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const Button_Medium = (props) => {
    return (
        <Button
            mode="outlined"
            color="black"
            title={props.title}
            onPress={props.onPress}
            style={styles.button}
        >
            {props.description}
        </Button>
    );
}

export default Button_Medium;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F6C602',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 11,
        marginVertical: 10,
        padding: 0,
        width: 170,
        elevation: 10,
    },
})