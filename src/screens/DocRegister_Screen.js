import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  HelperText,
  IconButton,
  Provider,
  Surface,
  Text,
  TextInput,
  Caption,
  List,
  Button,
  Portal,
  Dialog,
  Paragraph,
  ActivityIndicator,
} from "react-native-paper";
import Appbar_Common from "../components/Appbar_Common";
import Button_Medium from "../components/Button_Medium";
import { array_Projects } from "../utils/ArrayProjects";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
//import DocumentTypesList from '../components/DocumentTypesList';
import DateTimePicker from "@react-native-community/datetimepicker";
import { api } from "../utils/Api";
import { authentication } from "../utils/Authentication";
import { useNavigation } from "@react-navigation/native";

const DocRegister_Screen = ({ route, navigation: { navigate } }) => {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState("");
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const [photoBase64, setPhotoBase64] = useState("");
  const [creatingDocument, setCreatingDocument] = useState(false);
  //Logica send Image to server
  const docToServer = async (base64) => {
    console.log(photoLoaded)
    if (photoLoaded) {
      try {
        setCreatingDocument(true);
        const response = await axios.post(api.post, {
          tipo: "crearDocument",
          id_usuari: authentication.id,
          nom_document: nameDocument,
          data_vigent: date,
          titular_perfil: profile,
          coleccio: typeDocument,
          imatge_base64: base64,
        });
        setCreatingDocument(false);
        navigate("Main_Screen");
      } catch (error) {
      }
    }
  };

  const pickImage = async () => {
    let permissions = await ImagePicker.requestCameraPermissionsAsync()

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 0.5,
      base64: true,
      cameraPermission: "Es necessita permissos per a la cambra",
      photosPermission: "Es necessita permissos per a la cambra",
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
      setPhotoLoaded(true);
      setPhotoBase64(result.base64);
    }
  };

  //Lógica entrada nombre documento
  const [nameDocument, setNameDocument] = useState("");
  const [visible_nameDocument, setVisible_nameDocument] = useState(false);
  const handleOnFocus_nameDocument = () => {
    setVisible_nameDocument(nameDocument.length > 0);
  };
  const handleChangeText_nameDocument = (event) => {
    setNameDocument(event);
    setVisible_nameDocument(nameDocument.length > 0);
  };
  const handleOnBlur_nameDocument = () => {
    setVisible_nameDocument(nameDocument.length > 0);
  };
  const handleOnPress_IconClose_nameDocument = () => {
    setNameDocument("");
  };
  const esEspacio = (x) => {
    return x === " ";
  };
  const hasErrors_nameDocument = () => {
    let arrayName = nameDocument.split("");
    return arrayName.every(esEspacio);
  };

  //Lógica entrada perfil
  const [profile, setProfile] = useState("");
  const [visible_profile, setVisible_profile] = useState(false);
  const handleOnFocus_profile = () => {
    setVisible_profile(profile.length > 0);
  };
  const handleChangeText_profile = (event) => {
    setProfile(event);
    setVisible_profile(profile.length > 0);
  };
  const handleOnBlur_profile = () => {
    setVisible_profile(profile.length > 0);
  };
  const handleOnPress_IconClose_profile = () => {
    setProfile("");
  };
  const hasErrors_profile = () => {
    let arrayName = nameDocument.split("");
    return arrayName.every(esEspacio);
  };

  //Lógica Datepicker
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  //Logic Picker
  //Lógica tipo documentos
  const tipus = [
    "Identificatius", "Sanitaris", "Transports",
    "Allotjaments", "Segurs", "Events", "Altres"
  ]
  const [typeDocument, setTypeDocument] = useState("Tipus de document:");
  const handleOnPress_typeDocument = (types) => {
    setTypeDocument(types);
    setExpanded(false);
  }
  const [expanded, setExpanded] = useState(false)
  const DocumentTypesList = (
    <List.Accordion style={styles.list} title={typeDocument} expanded={expanded} onPress={() => expanded ? setExpanded(false) : setExpanded(true)}>
      {tipus.map((tipus, index) => {
        return (<List.Item
          key={index}
          style={styles.list}
          title={tipus}
          onPress={() => handleOnPress_typeDocument(tipus)}
        >

        </List.Item>)
      })}
    </List.Accordion>
  );

  const AndroidCalendar = (
    <Surface style={styles.box_DatePicker}>
      <Caption style={styles.caption}>Data de caducitat:</Caption>
      <IconButton
        icon="calendar"
        size={24}
        onPress={showDatepicker}
        color="#000000"
        style={styles.calendarIcon}
      />
      <Text style={styles.caption}>
        {date.getDate().toString() +
          "-" +
          (date.getMonth() + 1).toString() +
          "-" +
          date.getFullYear().toString()}
      </Text>
      {show && (
        <DateTimePicker
          style={styles.dateTimePicker}
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
    </Surface>
  );

  const IosCalendar = (
    <Surface style={styles.box_DatePicker}>
      <Caption style={styles.caption}>Data de caducitat:</Caption>
      <DateTimePicker
        style={styles.dateTimePicker}
        testID="dateTimePicker"
        value={date}
        mode={mode}
        display="default"
        onChange={onChange}
      />
    </Surface>
  );

  const ImageLoaded = (
    // <TouchableHighlight onPress={pickImage}>
    <TouchableOpacity onPress={pickImage}>
      <Image source={{ uri: photo }} resizeMode="cover" style={styles.image} />
    </TouchableOpacity>
    ///* </TouchableHighlight> */}
  )



  return (
    <Provider>
      <Portal>
        <Dialog visible={creatingDocument} dismissable={false}>
          <Dialog.Title>Creant Document</Dialog.Title>
          <Dialog.Content>
            <ActivityIndicator animating={true} color="#DEB202" size="large" />
          </Dialog.Content>
        </Dialog>
      </Portal>
      <Appbar_Common
        alPresionar={() => navigate("Main_Screen")}
        titulo="Registre Document"
      />
      <View style={styles.box}>
        <View style={styles.falseCard}>
          <ScrollView>
            <Surface style={styles.box_TextInput}>{DocumentTypesList}</Surface>

            <Surface style={styles.box_TextInput}>
              <TextInput
                mode="outlined"
                label={"Nom del document:"}
                placeholder="Introduïsca del document"
                activeOutlineColor="#0702F0"
                onFocus={handleOnFocus_nameDocument}
                onChangeText={handleChangeText_nameDocument}
                value={nameDocument}
                onBlur={handleOnBlur_nameDocument}
                right={
                  <TextInput.Icon
                    name="close"
                    onPress={handleOnPress_IconClose_nameDocument}
                  />
                }
              />
              <HelperText
                visible={visible_nameDocument}
                type={hasErrors_nameDocument() ? "error" : "info"}
              >
                {hasErrors_nameDocument()
                  ? "¡¡Error!! Nom no vàlid."
                  : "Nom vàlid"}
              </HelperText>
            </Surface>

            <Surface style={styles.box_TextInput}>
              <TextInput
                mode="outlined"
                label={"Perfil:"}
                placeholder="Introduïsca el propietari del document"
                activeOutlineColor="#0702F0"
                onFocus={handleOnFocus_profile}
                onChangeText={handleChangeText_profile}
                value={profile}
                onBlur={handleOnBlur_profile}
                right={
                  <TextInput.Icon
                    name="close"
                    onPress={handleOnPress_IconClose_profile}
                  />
                }
              />
              <HelperText
                visible={visible_profile}
                type={hasErrors_profile() ? "error" : "info"}
              >
                {hasErrors_profile() ? "¡¡Error!! Nom no vàlid." : "Nom vàlid"}
              </HelperText>
            </Surface>
            {Platform.OS === "ios" ? IosCalendar : AndroidCalendar}
            <Surface style={styles.box_ImportLogo}>
              <Surface style={styles.box_Icona}>
                {!photoLoaded ? <IconButton
                  icon="camera"
                  size={90}
                  onPress={pickImage}
                /> :
                  ImageLoaded
                }

              </Surface>

              <Text>Afig la imatge pressionant sobre l'icona.</Text>

            </Surface>

            <View style={styles.box_doubleButton_Mediano}>
              <Button_Medium
                titulo="Cancel"
                alPresionar={() => navigation.navigate("Main_Screen", { backPress: true })}
                descripcion="Cancel·lar"
              />
              <Button_Medium
                titulo="Create"
                alPresionar={() => docToServer(photoBase64)}
                descripcion="Crear"
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Provider >

  );
};

export default DocRegister_Screen;

const styles = StyleSheet.create({
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
    width: (Dimensions.get("window").width * 90) / 100,
    marginTop: (Dimensions.get("window").height * 2) / 100,
    padding: 10,
  },
  box_Headline: {
    backgroundColor: "#A7CAD9",
    borderWidth: 0,
    marginHorizontal: 15,
    marginVertical: 20,
    padding: 0,
    alignItems: "center",
    elevation: 0,
  },
  box_TextInput: {
    backgroundColor: "#A7CAD9",
    borderWidth: 0,
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 0,
    elevation: 0,
  },
  box_ImportLogo: {
    backgroundColor: "#A7CAD9",
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "grey",
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 0,
    height: 200,
    alignItems: "center",
    elevation: 0,
  },
  box_Icona: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "grey",
    marginHorizontal: 15,
    marginBottom: 5,
    padding: 0,
    height: 166,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    elevation: 0,
  },
  box_doubleButton_Mediano: {
    flexDirection: "row",
    backgroundColor: "#A7CAD9",
    borderWidth: 0,
    paddingBottom: 20,
    justifyContent: "space-evenly",
    elevation: 0,
  },

  box_DatePicker: {
    flexDirection: "row",
    backgroundColor: "#A7CAD9",
    marginHorizontal: 5,
    marginVertical: 5,
    elevation: 0,
    padding: 3,
  },
  dateTimePicker: {
    width: 100,
  },
  caption: {
    fontSize: 16,
    paddingTop: 5,
  },
  list: {
    borderColor: "#858585",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 2,
  },
  calendarIcon: {
    margin: 0,
  },
  image: {
    width: 100,
    height: 100,
  }
});
