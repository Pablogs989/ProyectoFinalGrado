import * as React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Avatar, Button, Caption , Card, IconButton, Text, Title, Paragraph, Surface } from 'react-native-paper';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Card_Proyecto = (props) => {
    return (
        <Card style={styles.box}>
            <Surface key={props.indexKey} style={{flexDirection:'row', maxHeight: 200}}>
                <Surface style={{flex:2}}>
                    <Card.Content style={{borderWidth:0}}>
                        <Caption>Títol:</Caption>
                        <Title>{props.titol}</Title>
                        <Caption>Equip:</Caption>
                        <Text>{props.equip}</Text>
                        <Caption>Cicle:</Caption>
                        <Text>{props.cicle}</Text>
                        <Caption>Votat:</Caption>
                        <Text>{props.votat}</Text>
                    </Card.Content>
                </Surface>
                <Surface style={{flex:1}}>
                    <Card.Cover
                        //  source={{ uri: 'https://picsum.photos/700' }}
                        source={props.logo}
                        style={{maxHeight: 140}}
                        />
                    <IconButton
                            icon="heart"
                            // color={Colors.red500}
                            size={40}
                            onPress={() => console.log('Pressed')}
                            // style={{borderWidth:1}}
                        />
                </Surface>
            </Surface>
        </Card>
    );
}

export default Card_Proyecto;

const styles = StyleSheet.create({
    box:{
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 10,
        padding:7,
        marginHorizontal: 15,
        marginVertical: 7,
        elevation: 20,        
    },
})