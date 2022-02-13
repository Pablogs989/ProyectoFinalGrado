import React, { useState, useEffect } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  BackHandler,
} from "react-native";
import {
  Appbar,
  Button,
  Headline,
  Provider,
  Searchbar,
  Text,
  ActivityIndicator,
} from "react-native-paper";
import Appbar_MainScreen from "../components/Appbar_MainScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { array_Projects } from "../utils/ArrayProjects";
import Card_Medium from "../components/Card_Medium";
import axios from "axios";
import { api } from "../utils/Api";
import { authentication } from "../utils/Authentication";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import Card_Big from "../components/Card_Big";


const Main_Screen = ({ route, navigation: { navigate } }) => {

  const isFocused = useIsFocused();
  // const navigationRef=useNavigation();
  useEffect(() => {
    // if(route.params.backPress === undefined) {route.params.backPress=false};
    // console.log(typeof route.params.backRefresh);
    // if (typeof route.params.backRefresh != "undefined"){
    setLoading(true);
    axios
      .get(api.getDocuments + authentication.id)
      .then((response) => {
        // console.log(response.data);
        //   setDocuments(response.data.split(","));
        setDocuments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
    // }
  }, [isFocused])

  const [valorColection, setValorColection] = useState("Tots");
  const [valorOwner, setValorOwner] = useState("Tots");
  const [valorFavorit, setValorFavorit] = useState("Tots");
  const [isLoading, setLoading] = useState(true);
  const [documents, setDocuments] = useState([]);
  // const [arrayData, setArrayData]=useState([]);
  useEffect(()=>{
      setArrayData(documents);
  },[]);



  //OJO --- let documents = array_Projects;
  // console.log(
  //   "inicio --> " + valorColection + " " + valorOwner + " " + valorFavorit
  // );

  //Documents List
  useEffect(() => {
    axios
      .get(api.getDocuments + authentication.id)
      .then((response) => {
        // console.log(response.data);
        //   setDocuments(response.data.split(","));
        setDocuments(response.data);
        setLoading(false);

      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  
  // console.log(documents);

  //Lógica per mostrar l'array filtrat amb Cards
  // const listCard_Documents = documents.map((object, index) => (
  //   <View key={index}>
  //     <Card_Medium
  //       document={object.nom_document}
  //       date={object.data_vigent}
  //       owner={object.titular_perfil}
  //       colection={object.coleccio}
  //       file={object.imatge_url}
  //       favorit={"false"}
  //     />
  //   </View>
  // ));



  var array_Projects= documents
  var nuevo_Proy = array_Projects;

  console.log("prueba 1");
  console.log(nuevo_Proy);

  // Lógica barra de búsqueda
  const [arrayData, setArrayData]=useState([]);
  useEffect(()=>{
      setArrayData(array_Projects);
  },[]);

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
  };


  console.log("prueba 1");
  console.log(nuevo_Proy);

  nuevo_Proy=arrayData;

  console.log("prueba 2");
  console.log(nuevo_Proy);

  //Lógica obtençio array amb els perfils
  let arrayOwners=[];
  for(let i=0; i<nuevo_Proy.length; i++){
    if(!arrayOwners.includes(nuevo_Proy[i].titular_perfil)){
      arrayOwners.push(nuevo_Proy[i].titular_perfil)
    }
  }
  // console.log(arrayOwners);  

     //Logica (passing paremetes to routes) per a obtindre el valor "colecció" seleccionat en la pantalla modal "Filter_MainSreen"
     useEffect(()=>{
      if(route?.params) {
          // const {colection, owner, favorit} = route.params;
          const {colection} = route.params;
          setValorColection(colection);
          // setValorOwner(owner);
          // setValorFavorit(favorit);
          // console.log("if --> "+valorColection+" "+valorOwner+" "+valorFavorit);
          // console.log("if --> "+valorColection);
      }
  }, [route?.params]);


  
  //Logica de filtrat per a obtindre un array que contingan exclusivament els objectes de la colecció seleccionada.
  if (valorColection!=='Tots'){
      // nuevo_Proy = nuevo_Proy.filter(function(item){
      //     console.log(item.coleccio+" ----> "+valorColection);
      //     return item.coleccio === valorColection;
      //  }).map(function({titular_perfil, imatge_url, coleccio, _id, nom_document, id_usuari, data_vigent}){
      //     console.log("coleccio --> "+coleccio)
      //      return {titular_perfil, imatge_url, coleccio, _id, nom_document, id_usuari, data_vigent};
      //  });
      
      // console.log("Dentro if ---> "+valorColection);
      let arraySameColection = [];
      for(let j=0; j<nuevo_Proy.length; j++){   
          // console.log("Dentro for: "+nuevo_Proy[j].coleccio);                      
          if(nuevo_Proy[j].coleccio===valorColection){
              // console.log("Dentro for e if: "+nuevo_Proy[j].coleccio); 
              arraySameColection.push(nuevo_Proy[j]);
          }
      }
      nuevo_Proy=arraySameColection;
      // for(let i=0; i<nuevo_Proy.length; i++){
      //     console.log("Dentro "+nuevo_Proy[i].titular_perfil+" "+nuevo_Proy[i].coleccio);
      // }
  }
  
  // for(let i=0; i<nuevo_Proy.length; i++){
  //     console.log("Fuera "+nuevo_Proy[i].titular_perfil+" "+nuevo_Proy[i].coleccio);
  // }



  //ENRIQUE - Logica per mostrar les dades dels objectes en "cards" independents per a cada "perfil_titular"
  const listCard_Documents=[];

  for(let i=0; i<arrayOwners.length; i++){
    let arrayDocsSameOwner=[];
    for(let j=0; j<nuevo_Proy.length; j++){    
      // console.log("Array final -- "+nuevo_Proy[j].titular_perfil+" "+nuevo_Proy[j].coleccio);            
      if(nuevo_Proy[j].titular_perfil===arrayOwners[i]){
        // console.log("Array final q cumple condicion -- "+nuevo_Proy[j].titular_perfil+" "+nuevo_Proy[j].coleccio);
        arrayDocsSameOwner.push(nuevo_Proy[j]);
      }
    }
    let item = (
      <View key={i}>
        <Card_Big owner={arrayOwners[i]} docsSameOwner={arrayDocsSameOwner}/>
      </View>);
    listCard_Documents.push(item);
  }

  const loading = (
    <View>
      <ActivityIndicator animating={true} color="#DEB202" size="large" />
    </View>
  );


  return (
    <Provider>
      {/* <Appbar_MainScreen
        alPresionar={() => navigate("Main_Screen")}
        titulo="Principal"
      /> */}
            {/* <AppSearchbar_MainScreen alPresionar={() => navigate("Main_Screen")} titulo="Principal" tornaValor={getValor}/> */}
            <Appbar.Header style={styles.fondo}>
                {/* <Appbar.BackAction onPress={props.alPresionar} style={{width:Dimensions.get("window").width*9/100}}/> */}
                <Appbar.Action icon="magnify" size={30} style={{width:Dimensions.get("window").width*9/100}}/>
                <Searchbar
                    placeholder="Buscar TripDocs"
                    placeholderTextColor="#000"
                    onChangeText={onChangeSearch}
                    // onFocus={()=>setShowCursor(true)}
                    // onIconPress={()=>setShowCursor(true)}  
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
            // contentContainerStyle={{ width: `${100 * intervals}%` }}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            pagingEnabled
            >
              {isLoading ? loading : listCard_Documents}
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
};

export default Main_Screen;

  const styles = StyleSheet.create({
    fondo:{
      backgroundColor: '#26528C',
      // backgroundColor: '#fff',
      alignSelf:"center"
      // flex:1,
      // flexDirection:'row',
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

  box_tripleButton:{
      flexDirection: "row",
      backgroundColor: "#26528C",
      borderWidth: 0,
      paddingVertical: Dimensions.get("window").height*1.5/100,
      justifyContent: "space-evenly",
      elevation: 0,
      width: Dimensions.get("window").width*100/100,

  },
});
