import React from 'react';
import { Dimensions, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const Button_Icon = (props) => {
    return (
        <Button 
            icon={props.icono} 
            mode="outlined" 
            color="black" 
            title={props.titulo} 
            onPress={props.alPresionar} 
            style={styles.boton}
            >
            {/* {props.descripcion} */}
        </Button>
    );
}

export default Button_Icon;

const styles = StyleSheet.create({
    boton:{
        backgroundColor: '#F6C602',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 11,
        // marginVertical: 10,
        padding: 0,
        elevation: 10,
        // alignItems:"center",
        // alignContent:"center",
        // justifyContent:"center",
        width: Dimensions.get("window").width*30/100,
        height: Dimensions.get("window").height*8/100,

    },
})