import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const Appbar_Common = (props) => {
    return (
        <Appbar.Header style={styles.background}>
            <Appbar.BackAction onPress={props.onPress} />
            <Appbar.Content title={props.title} style={{ alignItems: "center" }} />
            <Appbar.Action icon="account" size={30} onPress={() => { }} />
        </Appbar.Header>
    );
}

export default Appbar_Common;

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#26528C',
    },

})