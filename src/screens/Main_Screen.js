import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import {
  Appbar,
  Button,
  Provider,
  Searchbar,
  ActivityIndicator,
  Dialog,
  Surface,
  RadioButton,
  Portal,
  Text,
} from "react-native-paper";
import { api } from "../utils/Api";
import { authentication } from "../utils/Authentication";
import { useIsFocused } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";
import Card_Big from "../components/Card_Big";
import Button_Small from '../components/Button_Small';


const Main_Screen = ({ route, navigation: { navigate } }) => {

  const isFocused = useIsFocused();
  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      //Filter
      if (route?.params) {
        const { colection } = route.params;
        setCollectionValue(colection);
      }
      //Loading
      setLoading(true);
    } else {
      setLoading(false);
    }

    axios
      .get(api.getDocuments + authentication.id)
      .then((response) => {
        if (isApiSubscribed) {
          setDocuments(response.data);
          setFilteredDocuments(response.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (isApiSubscribed) {
          setLoading(false);
        }
      });

    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };
  }, [isFocused])

  const [collectionValue, setCollectionValue] = useState("Tots");
  const [isLoading, setLoading] = useState(true);
  const [documents, setDocuments] = useState([]);
  const [filteredDocuments, setFilteredDocuments] = useState([]);
  const [filterDialog, setFilterDialog] = useState(false);

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => {
    let arr = []
    setSearchQuery(query);
    documents.map((project, index) => {
      if (project.nom_document.toLowerCase().includes(query.toLowerCase())) {
        arr.push(project);
      }
    })
    setFilteredDocuments(arr);
  };

  //Lógica obtençio array amb els perfils
  let arrayOwners = [];
  for (let i = 0; i < documents.length; i++) {
    if (!arrayOwners.includes(documents[i].titular_perfil)) {
      arrayOwners.push(documents[i].titular_perfil)
    }
  }

  //Logica per mostrar les dades dels objectes en "cards" independents per a cada "perfil_titular"
  const listCard_Documents = [];

  for (let i = 0; i < arrayOwners.length; i++) {
    let arrayDocsSameOwner = [];
    for (let j = 0; j < filteredDocuments.length; j++) {

      if (filteredDocuments[j].titular_perfil === arrayOwners[i]) {
        if (collectionValue !== "Tots") {
          if (filteredDocuments[j].coleccio == collectionValue) {
            arrayDocsSameOwner.push(filteredDocuments[j]);
          }
        } else {
          arrayDocsSameOwner.push(filteredDocuments[j]);
        }
      }
    }
    let item = (
      <View key={i}>
        <Card_Big owner={arrayOwners[i]} docsSameOwner={arrayDocsSameOwner} />
      </View>);
    listCard_Documents.push(item);
  }

  const loading = (
    <View>
      <ActivityIndicator animating={true} color="#DEB202" size="large" />
    </View>
  );

  const types = [
    "Tots", "Identificatius", "Sanitaris", "Transports",
    "Allotjaments", "Segurs", "Events", "Altres"
  ]

  const filter = (
    <Portal>
      <Dialog visible={filterDialog} onDismiss={() => setFilterDialog(false)}>
        <Dialog.Title style={{ alignSelf: "center" }}>Opcions de Filtrat dels Documents</Dialog.Title>
        <Dialog.Content>
          <Surface style={{ borderWidth: 1, borderRadius: 10, elevation: 10, marginVertical: 20 }}>
            <RadioButton.Group onValueChange={newValue => setCollectionValue(newValue)} value={collectionValue}>
              {types.map((types, index) => {
                return (<Surface style={styles.view} key={index}>
                  <RadioButton value={types} />
                  <Text>{types}</Text>
                </Surface>)
              })}
            </RadioButton.Group>
          </Surface>
        </Dialog.Content>
        <Dialog.Actions style={styles.box_doubleButton_Small}>
          <Button_Small title="Cancel·lar" onPress={() => setFilterDialog(false)} description="Cancel·lar" />
          <Button_Small title="Confirmar" onPress={() => setFilterDialog(false)} description="Confirmar" />
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )


  return (
    <Provider>
      {filter}
      <Appbar.Header style={styles.background}>

        <Appbar.Action icon="account" size={30} onPress={() => { }} style={{ width: Dimensions.get("window").width * 11 / 100 }} />
        <Searchbar
          placeholder="Buscar TripDocs"
          placeholderTextColor="#000"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ width: Dimensions.get("window").width * 67 / 100, backgroundColor: '#A7CAD9' }}
          iconColor="#000"
          inputStyle={{ color: "#000", textAlign: "auto" }}
          selectionColor={"#000"}
        />

        <Image source={require("../assets/logoPequenyoColorInvertido.png")}
          style={{
            maxHeight: Dimensions.get("window").width * 10 / 100,
            maxWidth: Dimensions.get("window").width * 10 / 100,
            marginLeft: Dimensions.get("window").width * 4 / 100,
            marginRight: Dimensions.get("window").width * 2 / 100
          }} />
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
            {isLoading ? loading : listCard_Documents}
          </ScrollView>
        </View>


        <View style={styles.box_tripleButton}>
          <Button style={styles.button} onPress={() => navigate('DocRegister_Screen')}>
            <Icon name="plus" size={Dimensions.get("window").height * 6 / 100} color={"black"} />
          </Button>
          <Button style={styles.button} onPress={() => setFilterDialog(true)}>
            <Icon name="filter-variant" size={Dimensions.get("window").height * 6 / 100} color={"black"} />
          </Button>
        </View>
      </View>
    </Provider>
  );
};

export default Main_Screen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#26528C',
    alignSelf: "center"
  },
  button: {
    backgroundColor: '#F6C602',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 11,
    elevation: 10,
    justifyContent: "center",
    width: Dimensions.get("window").width * 40 / 100,
    height: Dimensions.get("window").height * 9 / 100,
  },

  box: {
    flex: 1,
    backgroundColor: '#26528C',
    height: Dimensions.get("window").height,
    alignItems: "center"
  },

  spaceCard: {
    height: Dimensions.get("window").height * 81 / 100,
    paddingVertical: Dimensions.get("window").height * 1 / 100,
  },

  box_tripleButton: {
    flexDirection: "row",
    backgroundColor: "#26528C",
    borderWidth: 0,
    paddingTop: Dimensions.get("window").height * 1 / 100,
    justifyContent: "space-evenly",
    elevation: 0,
    width: Dimensions.get("window").width * 100 / 100,

  },
  box_doubleButton_Small: {
    flexDirection: "row",
    paddingBottom: 15,
    justifyContent: "space-evenly",
  },
  view: {
    flexDirection: "row",
    alignItems: "baseline",
    backgroundColor: "transparent"
  }
});
