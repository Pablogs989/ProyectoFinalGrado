import React, {useState} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Avatar, Button, Caption , Card, IconButton, Text, Title, Paragraph, Surface } from 'react-native-paper';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Card_Proyecto = (props) => {
    const [alert, setAlert] = useState(false);
    const [favorit, setFavorit] = useState(false);

    // if(props.favorit==="true"){
    //     setFavorit(true);
    // }

    const changeAlert = () => {
        setAlert(!alert);
    }
    const changeFavorit = () => {
        setFavorit(!favorit);
    }

    return (
        <Card style={styles.box}>
            <View key={props.indexKey} style={{flexDirection:'row', maxHeight: 200}}>
                <View style={{flex:2}}>
                    <Card.Content style={{borderWidth:0}}>
                        <Caption>Document: </Caption>
                        <Title>{props.document}</Title>
                        <View style={{flexDirection:"row", alignItems:"baseline"}}>
                            <Caption>Data: </Caption>
                            <Text>{props.date}</Text>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"baseline"}}>
                            <Caption>Titular: </Caption>
                            <Text>{props.owner}</Text>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"baseline"}}>
                            <Caption>Colec·ció: </Caption>
                            <Text>{props.colection}</Text>
                        </View>
                    </Card.Content>
                </View>
                <View style={{flex:1}}>
                    <Card.Cover
                        //  source={{ uri: 'https://picsum.photos/700' }}
                        source={props.file}
                        style={{maxHeight: 140}}
                        />
                    <View style={{flexDirection:"row", alignItems:"baseline"}}>
                        <IconButton
                            icon="alert"                            
                            size={30}
                            onPress={() => changeAlert()}                            
                            color={alert ? "#FF0000" : "#000000"}
                        />
                        <IconButton
                            icon="heart"
                            // color={Colors.red500}
                            size={30}
                            onPress={() => changeFavorit()}
                            color={favorit ? "#FF0000" : "#000000"}
                        />
                    </View>
                </View>
            </View>
        </Card>
    );
}

export default Card_Proyecto;

const styles = StyleSheet.create({
    box:{
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 10,
        padding:Dimensions.get("window").width*2/100,
        // marginHorizontal: 15,
        marginHorizontal: Dimensions.get("window").width*4/100,        
        // marginVertical: 7,
        marginVertical: Dimensions.get("window").height*1/100,
        elevation: 20,        
    },
})