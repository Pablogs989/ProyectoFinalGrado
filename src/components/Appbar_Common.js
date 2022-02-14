import React from 'react';
import {Dimensions, Image, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const Appbar_Common = (props) => {
    return (
        <Appbar.Header style={styles.background}>
            <Appbar.BackAction onPress={props.onPress} />
            <Appbar.Content title={props.title} style={{ alignItems: "center" }} />
            <Image source={require("../assets/logoPequenyoColorInvertido.png")}
                style={{
                    maxHeight: Dimensions.get("window").width * 10 / 100,
                    maxWidth: Dimensions.get("window").width * 10 / 100,
                    marginLeft: Dimensions.get("window").width * 4 / 100,
                    marginRight: Dimensions.get("window").width * 2 / 100
                }} />
        </Appbar.Header>
    );
}

export default Appbar_Common;

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#26528C',
    },

})