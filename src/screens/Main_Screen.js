import React, { useState, useEffect } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  BackHandler,
} from "react-native";
import {
  Button,
  Headline,
  Provider,
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

const Main_Screen = ({ route, navigation: { navigate } }) => {
  const [valorColection, setValorColection] = useState("Tots");
  const [valorOwner, setValorOwner] = useState("Tots");
  const [valorFavorit, setValorFavorit] = useState("Tots");
  const [isLoading, setLoading] = useState(true);
  const [documents, setDocuments] = useState([]);

  let nuevo_Proy = array_Projects;
  console.log(
    "inicio --> " + valorColection + " " + valorOwner + " " + valorFavorit
  );

  //Documents List & Disabling going back
  useEffect(() => {
    axios
      .get(api.getDocuments + authentication.id)
      .then((response) => {
        let documents = [];
        console.log(response.data);
        //   setDocuments(response.data.split(","));
        setDocuments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  //Logica passing paremetes to routes
  useEffect(() => {
    if (route?.params) {
      const { colection, owner, favorit } = route.params;
      setValorColection(colection);
      setValorOwner(owner);
      setValorFavorit(favorit);
      console.log(
        "if --> " + valorColection + " " + valorOwner + " " + valorFavorit
      );
    }
  }, [route?.params]);

  // //Lógica comunicació fill-pare
  // const getValors=({cicle, favorit, votat}) => {

  //     console.log("Llista -->"+ cicle+ " "+favorit+ " "+votat);
  //     setValorCicle(cicle);
  //     setValorFavorit(favorit);
  //     setValorVotat(votat);
  // }

  //Logica de filtrat de valors en l'array
  //   if (valorColection !== "Tots") {
  //     nuevo_Proy = nuevo_Proy
  //       .filter(function (item) {
  //         return item.colection == valorColection;
  //       })
  //       .map(function ({ document, date, owner, colection, file_url, favorit }) {
  //         return { document, date, owner, colection, file_url, favorit };
  //       });
  //   }
  //   if (valorOwner !== "Tots") {
  //     nuevo_Proy = nuevo_Proy
  //       .filter(function (item) {
  //         return item.owner == valorOwner;
  //       })
  //       .map(function ({ document, date, owner, colection, file_url, favorit }) {
  //         return { document, date, owner, colection, file_url, favorit };
  //       });
  //   }
  //   if (valorFavorit !== "Tots") {
  //     nuevo_Proy = nuevo_Proy
  //       .filter(function (item) {
  //         return item.favorit == valorFavorit;
  //       })
  //       .map(function ({ document, date, owner, colection, file_url, favorit }) {
  //         return { document, date, owner, colection, file_url, favorit };
  //       });
  //   }

  //Lógica per mostrar l'array filtrat amb Cards
  const listCard_Documents = documents.map((object, index) => (
    <View key={index}>
      <Card_Medium
        document={object.nom_document}
        date={object.data_vigent}
        owner={object.titular_perfil}
        colection={object.coleccio}
        file={object.imatge_url}
        favorit={"false"}
      />
    </View>
  ));

  const loading = (
    <View>
      <ActivityIndicator animating={true} color="red" size="large" />
    </View>
  );

  return (
    <Provider>
      <Appbar_MainScreen
        alPresionar={() => navigate("Main_Screen")}
        titulo="Principal"
      />
      <View style={styles.box}>
        <View style={styles.falseCard}>
          <Headline style={styles.box_Headline}> Mi perfil</Headline>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* {listCard_Projects} */}
            {isLoading ? loading : listCard_Documents}
          </ScrollView>
        </View>
        <View style={styles.box_tripleButton}>
          <Button
            style={styles.boton}
            onPress={() => navigate("DocRegister_Screen")}
          >
            <Icon
              name="plus"
              size={(Dimensions.get("window").height * 6) / 100}
              color={"black"}
            />
          </Button>
          <Button style={styles.boton} onPress={() => {}}>
            <Icon
              name="folder"
              size={(Dimensions.get("window").height * 6) / 100}
              color={"black"}
            />
          </Button>
          <Button
            style={styles.boton}
            onPress={() => navigate("Filter_MainScreen_MD")}
          >
            <Icon
              name="filter-variant"
              size={(Dimensions.get("window").height * 6) / 100}
              color={"black"}
            />
          </Button>
        </View>
      </View>
    </Provider>
  );
};

export default Main_Screen;

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#F6C602",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 11,
    elevation: 10,
    justifyContent: "center",
    width: (Dimensions.get("window").width * 30) / 100,
    height: (Dimensions.get("window").height * 8) / 100,
  },

  box: {
    flex: 1,
    backgroundColor: "#26528C",
    height: Dimensions.get("window").height,
    alignItems: "center",
  },

  falseCard: {
    backgroundColor: "#A7CAD9",
    borderRadius: 20,
    height: (Dimensions.get("window").height * 81) / 100,
    width: (Dimensions.get("window").width * 95) / 100,
    marginTop: (Dimensions.get("window").height * 1) / 100,
    paddingVertical: (Dimensions.get("window").height * 1) / 100,
  },
  box_Headline: {
    backgroundColor: "#A7CAD9",
    marginTop: (Dimensions.get("window").height * 0) / 100,
    marginBottom: (Dimensions.get("window").height * 1) / 100,
    alignSelf: "center",
    elevation: 0,
  },
  box_tripleButton: {
    flexDirection: "row",
    backgroundColor: "#26528C",
    borderWidth: 0,
    paddingVertical: (Dimensions.get("window").height * 1.5) / 100,
    justifyContent: "space-evenly",
    elevation: 0,
    width: (Dimensions.get("window").width * 100) / 100,
  },
});
