import React from 'react';
import { StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import { Card, Headline } from 'react-native-paper';
import Card_Medium from './Card_Medium';



const Card_Big = (props) => {


    //Lógica per mostrar l'array filtrat amb Cards
    const listCard_Documents = props.docsSameOwner.map((object, index) => (
        <View key={index}>
            <Card_Medium
                doc_name={object.doc_name}
                effective_date={object.effective_date}
                profile={object.profile}
                collection={object.collection}
                img_url={object.img_url}
            />
        </View>
    ));

    return (
        <Card style={styles.falseCard}>
            <View style={{ paddingBottom: Dimensions.get("window").height * 2 / 100 }} >
                <Headline style={styles.box_Headline}>{props.owner}</Headline>
                <ScrollView showsVerticalScrollIndicator={false} >
                    {listCard_Documents}
                </ScrollView>
            </View>
        </Card>
    );
}

export default Card_Big;

const styles = StyleSheet.create({
    falseCard: {
        backgroundColor: '#A7CAD9',
        borderRadius: 20,
        height: Dimensions.get("window").height * 79 / 100,
        width: Dimensions.get("window").width * 95 / 100,
        marginHorizontal: Dimensions.get("window").width * 2.5 / 100,
        paddingBottom: Dimensions.get("window").width * 14 / 100,
    },
    box_Headline: {
        backgroundColor: "#A7CAD9",
        marginVertical: Dimensions.get("window").height * 1.5 / 100,
        alignSelf: 'center',
        elevation: 0,
    },
})