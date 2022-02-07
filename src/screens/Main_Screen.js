import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {Appbar, Caption ,Button, Headline, Paragraph, Provider, Subheading, Text, Title, Surface} from 'react-native-paper';
import Appbar_Common from '../components/Appbar_Common';
// import FAB_Filter from '../components/FAB_Filter';
import { array_Projects } from '../utils/ArrayProjects';
import Card_Medium from '../components/Card_Medium';


const Main_Screen = ({navigation}) => {

    const[valorCicle, setValorCicle] = useState('Tots');
    const[valorFavorit, setValorFavorit] = useState('Tots');
    const[valorVotat, setValorVotat] = useState('Tots');    
    let nuevo_Proy= array_Projects;

    //Lógica comunicació fill-pare
    const getValors=({cicle, favorit, votat}) => {

        console.log("Llista -->"+ cicle+ " "+favorit+ " "+votat);
        setValorCicle(cicle);
        setValorFavorit(favorit);
        setValorVotat(votat);
    }

    //Logica de filtrat de valors en l'array
    if (valorCicle!=='Tots'){
        nuevo_Proy = nuevo_Proy.filter(function(item){
            return item.cicle == valorCicle;
         }).map(function({titol, equip, email, cicle, descripcio, logo, votat, favorit}){
             return {titol, equip, email, cicle, descripcio, logo, votat, favorit};
         });     
    }
    if (valorFavorit!=='Tots'){
        nuevo_Proy = nuevo_Proy.filter(function(item){
            return item.favorit == valorFavorit;
         }).map(function({titol, equip, email, cicle, descripcio, logo, votat, favorit}){
             return {titol, equip, email, cicle, descripcio, logo, votat, favorit};
         });
    }     
    if (valorVotat!=='Tots') {
        nuevo_Proy = nuevo_Proy.filter(function(item){
            return item.votat == valorVotat;
         }).map(function({titol, equip, email, cicle, descripcio, logo, votat, favorit}){
             return {titol, equip, email, cicle, descripcio, logo, votat, favorit};
         });  
    }
    

    //Lógica per mostrar l'array filtrat amb Cards
    const listCard_Projects = nuevo_Proy.map((object, index) => (
        <View key={index}>
            <Card_Medium
                titol={object.titol}
                equip={object.equip}
                cicle={object.cicle}
                logo={object.logo}
                votat={object.votat}
                />
        </View>
    ));








    return (
        <Provider>
            <Appbar_Common alPresionar={() => navigation.navigate("Main_Screen")} titulo="Principal" />
            <View style={styles.box}>
                <ScrollView style={styles.falseCard}>
                    {listCard_Projects}
                </ScrollView>
                {/* <Surface style={styles.falseCard}> 
                </Surface>                 */}
                {/* <FAB_Filterr tornaValors={getValors} /> */}
            </View>

        </Provider>
    );
}

export default Main_Screen;

const styles = StyleSheet.create({
    box:{
        flex:1,
        backgroundColor: '#26528C',
        height: Dimensions.get("window").height,
        alignItems: "center"
    },

    falseCard:{
        backgroundColor:'#A7CAD9',
        borderRadius:20,
        height: Dimensions.get("window").height*81/100,
        width: Dimensions.get("window").width*90/100,
        marginTop: Dimensions.get("window").height*2/100,
        padding: 10
    }
})