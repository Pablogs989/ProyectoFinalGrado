import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
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
} from "react-native-paper";
import Appbar_Common from "../components/Appbar_Common";
import Button_Medium from "../components/Button_Medium";
import { array_Projects } from "../utils/ArrayProjects";
//import DocumentTypesList from '../components/DocumentTypesList';
import DateTimePicker from "@react-native-community/datetimepicker";

const DocRegister_Screen = ({ route, navigation: { navigate } }) => {
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
  const esValido = () => {
    return;
  };
  const esEspacio = (x) => {
    return x === " ";
  };
  const hasErrors_nameDocument = () => {
    let arrayName = nameDocument.split("");
    return arrayName.every(esEspacio);
  };

  //Lógica tipo documentos
  const [typeDocument, setTypeDocument] = useState("Tipus de document:");

  const handleOnPressSalut_typeDocument = () => {
    setTypeDocument("Salut");
    console.log(typeDocument);
  };
  const handleOnPressAllotjaments_typeDocument = () => {
    setTypeDocument("Allotjaments");
    console.log(typeDocument);
  };
  const handleOnPressDocumentacio_typeDocument = () => {
    setTypeDocument("Documentacio");
    {
      console.log(typeDocument);
    }
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

  //Lógica afegir proyecte a array proyectes
  let newDocument = {
    typeDocument: "",
    nameDocument: "",
    date: "",
    profile: "",
    image: "",
  };
  const handleOnPress_Confirmar = () => {
    newDocument.typeDocument = typeDocument;
    newDocument.nameDocument = nameDocument;
    newDocument.date = date;
    newDocument.profile = profile;
    newDocument.image = require("../assets/library_music_22762.png");
    array_Projects.push(newDocument);
    navigate("Main_Screen");
  };

  const DocumentTypesList = (
    <List.Accordion style={styles.list} title={typeDocument}>
      <List.Item
        style={styles.list}
        title="Salut"
        onPress={handleOnPressSalut_typeDocument}
      />
      <List.Item
        style={styles.list}
        title="Allotjaments"
        onPress={handleOnPressAllotjaments_typeDocument}
      />
      <List.Item
        style={styles.list}
        title="Documentació"
        onPress={handleOnPressDocumentacio_typeDocument}
      />
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

  return (
    <Provider>
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

            {/* <DatePicker
                            modal
                            mode="date"
                            open={open}
                            date={date}
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                                console.log(date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        /> */}

            {Platform.OS === "ios" ? IosCalendar : AndroidCalendar}

            <Surface style={styles.box_ImportLogo}>
              <Surface style={styles.box_Icona}>
                <IconButton
                  icon="camera"
                  size={90}
                  onPress={() => navigate("LogIn_Screen")}
                />
              </Surface>

              <Text>Afig la imatge pressionant sobre l'icona.</Text>
            </Surface>

            <View style={styles.box_doubleButton_Mediano}>
              <Button_Medium
                titulo="Cancel"
                onPress={() => navigate("Main_Screen")}
                descripcion="Cancel·lar"
              />
              <Button_Medium
                titulo="Create"
                onPress={handleOnPress_Confirmar}
                descripcion="Crear"
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Provider>
    //     <Provider>
    //     <Appbar_Pantallas alPresionar={() => navigate("P1_Principal")} titulo="Registre Projectes"/>

    //     <Surface style={styles.box_Headline}>
    //         <Headline style={{textAlign:'center'}}>Registra les Dades del teu Projecte</Headline>
    //     </Surface>

    // </Provider>
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
});
