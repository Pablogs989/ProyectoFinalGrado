import React, {useState, useEffect} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {Appbar, Button, Provider, Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { array_Projects } from '../utils/ArrayProjects';
import Card_Big from '../components/Card_Big';


const Main_Screen = ({route, navigation: {navigate}}) => {

    // let array_Projects = [
    //     {"titular_perfil":"Ximo", "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "coleccio": "salut", "_id": { "$oid": "6203ad358f4c332273fcf95b" },"nom_document":"Xidoc 1", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Ximo", "imatge_url":require("../assets/olimpycs_atletismo_icon-icons.com_68597.png"), "coleccio": "transport", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Xidoc 2", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Josep", "imatge_url":require("../assets/taxi_cab_transportation_automobile_car_vehicle_icon_128574.png"), "coleccio": "salut", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Jodoc 1", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Enrique", "imatge_url":require("../assets/-meal_89750.png"), "coleccio": "salut", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Endoc 1", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Pablo", "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "coleccio": "allotjament", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Padoc 1", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Manuel", "imatge_url":require("../assets/olimpycs_atletismo_icon-icons.com_68597.png"), "coleccio": "transport", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Madoc 1", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Ximo", "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "coleccio": "salut", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Xidoc 3", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Josep", "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "coleccio": "salut", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Jodoc 2", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Enrique", "imatge_url":require("../assets/olimpycs_atletismo_icon-icons.com_68597.png"), "coleccio": "salut", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Endoc 2", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Pablo", "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "coleccio": "salut", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Padoc 2", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Manuel", "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "coleccio": "transport", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Madoc 2", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Ximo", "imatge_url":require("../assets/olimpycs_atletismo_icon-icons.com_68597.png"), "coleccio": "salut", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Xidoc 4", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Ximo", "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "coleccio": "salut", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Xidoc 5", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Josep", "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "coleccio": "allotjament", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Jodoc 3", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Enrique", "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "coleccio": "transport", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Endoc 3", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Pablo", "imatge_url":require("../assets/olimpycs_atletismo_icon-icons.com_68597.png"), "coleccio": "salut", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Padoc 3", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Manuel", "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "coleccio": "allotjament", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Madoc 3", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Ximo", "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "coleccio": "salut", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Xidoc 6", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Josep", "imatge_url":require("../assets/olimpycs_atletismo_icon-icons.com_68597.png"), "coleccio": "transport", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Jodoc 4", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Enrique", "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "coleccio": "allotjament", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Endoc 4", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Pablo", "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "coleccio": "allotjament", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Padoc 4", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"},
    //     {"titular_perfil":"Manuel", "imatge_url":require("../assets/Colored_Flowers_icon-icons.com_55388.png"), "coleccio": "salut", "_id": { "$oid": "6203ad358f4c332273fcf95b" }, "nom_document":"Madoc 4", "id_usuari": "620290dde4ec0ec87b3fd85b", "data_vigent": "2022-02-02T18:14:10.197Z"}
    // ];
   
    var nuevo_Proy = array_Projects;
    const [arrayData, setArrayData]=useState([{}]);

    useEffect(()=>{
        setArrayData(array_Projects);
    },[])
  

    //Lógica obtençio array amb els objectes que coincideixen amb la reserca.
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query) => {
        let arr=[]
        setSearchQuery(query);
        array_Projects.map((project, index) => {
            if(project.nom_document.toLowerCase().includes(query.toLowerCase())){
                arr.push(project);
            }
        })
        setArrayData(arr);
    }

    nuevo_Proy=arrayData;


    //Lógica obtençio array amb els perfils
    let arrayOwners=[];
    for(let i=0; i<nuevo_Proy.length; i++){
        if(!arrayOwners.includes(nuevo_Proy[i].titular_perfil)){
            arrayOwners.push(nuevo_Proy[i].titular_perfil)
        }
    }


    //Logica (passing paremetes to routes) per a obtindre el valor "colecció" seleccionat en la pantalla modal "Filter_MainSreen"
    useEffect(()=>{
        if(route?.params) {
            const {colection} = route.params;
            setValorColection(colection);
        }
    }, [route?.params]);


    //Logica de filtrat per a obtindre un array que contingan exclusivament els objectes de la colecció seleccionada.
    const [valorColection, setValorColection] = useState('Tots');

    if (valorColection!=='Tots'){
        let arraySameColection = [];
        for(let j=0; j<nuevo_Proy.length; j++){                        
            if(nuevo_Proy[j].coleccio===valorColection){
                arraySameColection.push(nuevo_Proy[j]);
            }
        }
        nuevo_Proy=arraySameColection;
    }


    //Logica per mostrar les dades dels objectes en "cards" independents per a cada "perfil_titular"
    const listCard_Projects=[];

    for(let i=0; i<arrayOwners.length; i++){
        let arrayDocsSameOwner=[];
        for(let j=0; j<nuevo_Proy.length; j++){               
            if(nuevo_Proy[j].titular_perfil===arrayOwners[i]){
                arrayDocsSameOwner.push(nuevo_Proy[j]);
            }
        }
        let item = (
            <View key={i}>
                <Card_Big owner={arrayOwners[i]} docsSameOwner={arrayDocsSameOwner}/>
            </View>);
        listCard_Projects.push(item);
    }


    return (
        <Provider >
            <Appbar.Header style={styles.fondo}>
                <Appbar.Action icon="magnify" size={30} style={{width:Dimensions.get("window").width*9/100}}/>
                <Searchbar
                    placeholder="Buscar TripDocs"
                    placeholderTextColor="#000"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{width:Dimensions.get("window").width*71/100, backgroundColor:'#A7CAD9'}}
                    iconColor='#A7CAD9'
                    inputStyle={{color:"#000", textAlign:"auto"}}
                    selectionColor={"#000"}                
                    />
                <Appbar.Action icon="account" size={30} onPress={()=>{}} style={{width:Dimensions.get("window").width*8/100}}/>
            </Appbar.Header>
            <View style={styles.box}>
                <View style={styles.spaceCard}>                    
                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={200}
                        decelerationRate="fast"
                        pagingEnabled
                        >
                            {listCard_Projects}
                    </ScrollView>                    
                </View>
                <View style={styles.box_tripleButton}>
                    <Button style={styles.boton} onPress={()=>navigate('DocRegister_Screen')}>                        
                        <Icon name="plus" size={Dimensions.get("window").height*6/100} color={"black"}/>                                               
                    </Button>   
                    <Button style={styles.boton} onPress={()=>{}}>                        
                        <Icon name="folder" size={Dimensions.get("window").height*6/100} color={"black"}/>                                               
                    </Button>   
                    <Button style={styles.boton} onPress={()=>navigate('Filter_MainScreen_MD')}>                        
                        <Icon name="filter-variant" size={Dimensions.get("window").height*6/100} color={"black"}/>                                               
                    </Button>         
                </View>
            </View>
        </Provider>
    );
}

export default Main_Screen;

const styles = StyleSheet.create({
    fondo:{
        backgroundColor: '#26528C',
        alignSelf:"center"
    },
    boton:{
        backgroundColor: '#F6C602',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 11,
        elevation: 10,
        justifyContent:"center",
        width: Dimensions.get("window").width*30/100,
        height: Dimensions.get("window").height*8/100,
    },
    box:{
        flex:1,
        backgroundColor: '#26528C',
        height: Dimensions.get("window").height,
        alignItems: "center"
    },
    spaceCard:{
        height: Dimensions.get("window").height*81/100,
        paddingVertical: Dimensions.get("window").height*1/100,
    },
    falseCard:{
        backgroundColor:'#A7CAD9',
        borderRadius:20,

        width: Dimensions.get("window").width*95/100,
        marginTop: Dimensions.get("window").height*1/100,

    },
    box_Headline:{
        backgroundColor: "#A7CAD9",
        marginTop: Dimensions.get("window").height*0/100,
        marginBottom: Dimensions.get("window").height*1/100,
        alignSelf:'center',
        elevation: 0,
    },
    box_tripleButton:{
        flexDirection: "row",
        backgroundColor: "#26528C",
        borderWidth: 0,
        paddingVertical: Dimensions.get("window").height*1.5/100,
        justifyContent: "space-evenly",
        elevation: 0,
        width: Dimensions.get("window").width*100/100,

    },
})