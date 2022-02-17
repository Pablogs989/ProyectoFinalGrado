import React, { useState, useEffect } from "react";
import {
  Dimensions, Image, ScrollView, StyleSheet, View, BackHandler
} from "react-native";
import {
  Appbar, Button, Provider, Searchbar, ActivityIndicator, Dialog, Surface, RadioButton, Portal, Text, List,
} from "react-native-paper";
import { api } from "../utils/Api";
import { authentication } from "../utils/Authentication";
import { useIsFocused } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";
import Card_Big from "../components/Card_Big";
import Button_Small from '../components/Button_Small';
import Button_Medium from '../components/Button_Medium';
import i18n from "i18next";

import { useTranslation } from "react-i18next";


const Main_Screen = ({ route, navigation: { navigate } }) => {
  const { t } = useTranslation();
  const types = t("Types", { returnObjects: true });
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
          setDocuments([]);
          setLoading(false);
        }
      });

    BackHandler.addEventListener('hardwareBackPress', function () {

      return true;
    });

    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };


  }, [isFocused])

  const [collectionValue, setCollectionValue] = useState(types[0]);
  const [isLoading, setLoading] = useState(true);
  const [documents, setDocuments] = useState([]);
  const [filteredDocuments, setFilteredDocuments] = useState([]);
  const [filterDialog, setFilterDialog] = useState(false);

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => {
    let arr = []
    setSearchQuery(query);
    documents.map((project, index) => {
      if (project.doc_name.toLowerCase().includes(query.toLowerCase())) {
        arr.push(project);
      }
    })
    setFilteredDocuments(arr);
  };

  //Lógica obtençio array amb els perfils
  let arrayOwners = [];
  for (let i = 0; i < documents.length; i++) {
    if (!arrayOwners.includes(documents[i].profile)) {
      arrayOwners.push(documents[i].profile)
    }
  }

  //Logica per mostrar les dades dels objectes en "cards" independents per a cada "perfil_titular"
  const listCard_Documents = [];

  for (let i = 0; i < arrayOwners.length; i++) {
    let arrayDocsSameOwner = [];
    for (let j = 0; j < filteredDocuments.length; j++) {

      if (filteredDocuments[j].profile === arrayOwners[i]) {
        if (collectionValue !== types[0]) {
          if (filteredDocuments[j].collection == collectionValue) {
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


  const filter = (
    <Dialog visible={filterDialog} onDismiss={() => setFilterDialog(false)}>
      <Dialog.Title style={{ alignSelf: "center" }}>{t("Main_Screen_Filter_Title")}</Dialog.Title>
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
        <Button_Small title={t("Main_Screen_Cancel")} onPress={() => setFilterDialog(false)} description={t("Main_Screen_Cancel")} />
        <Button_Small title={t("Main_Screen_Confirm")} onPress={() => setFilterDialog(false)} description={t("Main_Screen_Confirm")} />
      </Dialog.Actions>
    </Dialog>
  )

  const [visibleUserInfo, setVisibleUserInfo] = useState(false);
  let valencia = ["Valencia", "https://ih1.redbubble.net/image.341819860.7405/flat,128x128,075,t-pad,128x128,f8f8f8.u8.jpg"]
  let english = ["English", "https://static.wikia.nocookie.net/cyberpunk/images/7/7c/Cyberpunk_2020_UK.png/revision/latest?cb=20191206205307"]
  const [userInfoDetails, setUserInfoDetails] = useState(valencia)
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);
  const userInfo = (
    <Dialog visible={visibleUserInfo} onDismiss={() => setVisibleUserInfo(false)}>
      <Dialog.Title style={{ alignSelf: "center" }}>{t("Main_Screen_UserDialog_Title")}</Dialog.Title>
      <Dialog.Content>
        <List.Accordion
          title={userInfoDetails[0]}
          // left={props => <List.Icon {...props} icon="folder" />}
          left={props => (
            <Image style={{ width: 24, height: 24, marginTop: 5 }} source={{ uri: userInfoDetails[1] }} />
          )}
          expanded={expanded}
          style={styles.list}
          onPress={handlePress}>
          {userInfoDetails[0] === "Valencia" || userInfoDetails[0] === "Valencian" ? <List.Item
            title={english[0]}
            style={styles.list}
            left={props => <Image style={{ width: 24, height: 24, marginTop: 6 }} source={{ uri: english[1] }} />}
            onPress={() => {
              setUserInfoDetails(english)
              i18n.changeLanguage("en");
              setCollectionValue("All")
            }}
          /> : <List.Item
            style={styles.list}
            title={valencia[0]}
            left={props => <Image style={{ width: 24, height: 24, marginTop: 6 }} source={{ uri: valencia[1] }} />}
            onPress={() => {
              setUserInfoDetails(valencia)
              i18n.changeLanguage("va");
              setCollectionValue("Tots")
            }
            }
          />}


        </List.Accordion>

      </Dialog.Content>
      <Dialog.Actions style={styles.box_doubleButton_Small}>
        <Button_Medium title={t("Main_Screen_UserDialog_SignOut")} onPress={() => navigate("LogIn_Screen")} description={t("Main_Screen_UserDialog_SignOut")} />
        {/* <Button_Small title={t("Main_Screen_Confirm")} onPress={() => setFilterDialog(false)} description={t("Main_Screen_Confirm")} /> */}
      </Dialog.Actions>
    </Dialog>
  )



  return (
    <Provider>
      <Portal>
        {filter}
        {userInfo}
      </Portal>

      <Appbar.Header style={styles.background}>

        <Appbar.Action icon="account" size={30} onPress={() => {
          setVisibleUserInfo(true)
        }} style={{ width: Dimensions.get("window").width * 11 / 100 }} />
        <Searchbar
          placeholder={t("Main_Screen_Buscador")}
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
  },
  list: {
    borderColor: "#858585",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 2,
  }
});
