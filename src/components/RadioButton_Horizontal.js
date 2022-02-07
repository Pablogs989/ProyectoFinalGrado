import * as React from 'react';
import {StyleSheet} from 'react-native';
import { RadioButton, Text, Surface } from 'react-native-paper';


const RadioButton_Horizontal = (props) => {
    return (  
        <Surface style={styles.view}>
            <RadioButton value={props.value} />
            <Text>{props.text}</Text> 
        </Surface>
    );
};

export default RadioButton_Horizontal;

const styles = StyleSheet.create({
    view:{
        flexDirection:"row", 
        alignItems:"baseline", 
        backgroundColor:"transparent"
    }
})