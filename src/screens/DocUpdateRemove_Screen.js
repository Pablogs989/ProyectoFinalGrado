import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  HelperText, IconButton, Provider, Surface, Text, TextInput, Caption, List, Portal, Dialog, ActivityIndicator, Button
} from "react-native-paper";
import { api } from "../utils/Api";
import { useNavigation } from "@react-navigation/native";
import Appbar_Common from "../components/Appbar_Common";
import Button_Small from "../components/Button_Small";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useTranslation } from "react-i18next";


const DocUpdateRemove_Screen = (props) => {
  const { t } = useTranslation();
  //Logic Remove Doc
  const [confirmRemoving, setConfirmRemoving] = useState(false);
  const [removingDocument, setRemovingDocument] = useState(false);
  const removeDoc = async (base64) => {
    if (photoLoaded) {

      try {
        setRemovingDocument(true);
        let response = await axios.delete(api.post, {
          data: {
            "type": "removeDocument",
            "_id": parameters.img_url
          }
        });
        setRemovingDocument(false);
        navigation.navigate("Main_Screen")
        // navigate("Main_Screen");
      } catch (error) {
      }
    }
  };

  const parameters = props.route.params;
  const navigation = useNavigation();
  const [photo, setPhoto] = useState(api.apache + parameters.img_url + ".jpg" + '?' + new Date());
  const [photoLoaded, setPhotoLoaded] = useState(true)
  const [photoBase64, setPhotoBase64] = useState("");
  const [updatingDocument, setUpdatingDocument] = useState(false);
  //Logic update Doc
  const updateDoc = async (base64) => {
    if (photoLoaded) {

      try {
        setUpdatingDocument(true);
        let response = await axios.put(api.post, {
          type: "updateDocument",
          _id: parameters.img_url,
          doc_name: nameDocument,
          effective_date: date,
          profile: profile,
          collection: typeDocument,
          img_base64: photoBase64
        });
        setUpdatingDocument(false);
        navigation.navigate("Main_Screen")
        // navigate("Main_Screen");
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

  //Logic Document Name
  const [nameDocument, setNameDocument] = useState(parameters.doc_name);
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
  const isSpace = (x) => {
    return x === " ";
  };
  const hasErrors_nameDocument = () => {
    let arrayName = nameDocument.split("");
    return arrayName.every(isSpace);
  };

  //Logic Profile Name
  const [profile, setProfile] = useState(parameters.profile);
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
    let arrayName = profile.split("");
    return arrayName.every(isSpace);
  };

  //Logic DatePicker
  const [date, setDate] = useState(new Date(parameters.effective_date));
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
  //Logic Document Types
  const types = t("Types_Put", { returnObjects: true });
  const [typeDocument, setTypeDocument] = useState(parameters.collection);
  const handleOnPress_typeDocument = (types) => {
    setTypeDocument(types);
    setExpanded(false);
  }
  const [expanded, setExpanded] = useState(false)
  const DocumentTypesList = (
    <List.Accordion style={styles.list} title={typeDocument} expanded={expanded} onPress={() => expanded ? setExpanded(false) : setExpanded(true)}>
      {types.map((types, index) => {
        return (<List.Item
          key={index}
          style={styles.list}
          title={types}
          onPress={() => handleOnPress_typeDocument(types)}
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
    <TouchableOpacity onPress={pickImage}>
      <Image source={{ uri: photo }} resizeMode="cover" style={styles.image} />
    </TouchableOpacity>
  )



  return (
    <Provider>
      <Portal>
        <Dialog visible={updatingDocument} dismissable={false}>
          <Dialog.Title>{t("DocUpRe_Screen_Updating")}</Dialog.Title>
          <Dialog.Content>
            <ActivityIndicator animating={true} color="#DEB202" size="large" />
          </Dialog.Content>
        </Dialog>
        <Dialog visible={confirmRemoving} dismissable={false}>
          <Dialog.Title>{t("DocUpRe_Screen_DeletingConfirmation_Title")}</Dialog.Title>
          <Dialog.Content>
            <Text>{t("DocUpRe_Screen_DeletingConfirmation_Text")}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setConfirmRemoving(false)}>{t("DocUpRe_Screen_DeletingConfirmation_No")}</Button>
            <Button onPress={() => {
              setConfirmRemoving(false)
              removeDoc(photoBase64)
            }}>{t("DocUpRe_Screen_DeletingConfirmation_Yes")}</Button>
          </Dialog.Actions>
        </Dialog>
        <Dialog visible={removingDocument} dismissable={false}>
          <Dialog.Title>{t("DocUpRe_Screen_Deleting")}</Dialog.Title>
          <Dialog.Content>
            <ActivityIndicator animating={true} color="#DEB202" size="large" />
          </Dialog.Content>
        </Dialog>
      </Portal>
      <Appbar_Common
        onPress={() => navigation.navigate("Main_Screen")}
        title={t("DocUpRe_Screen_Button")}
      />
      <View style={styles.box}>
        <View style={styles.falseCard}>
          <ScrollView>
            <Surface style={styles.box_TextInput}>{DocumentTypesList}</Surface>

            <Surface style={styles.box_TextInput}>
              <TextInput
                mode="outlined"
                label={t("DocUpRe_Screen_Doc")}
                placeholder={t("DocUpRe_Screen_Doc_Placeholder")}
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
                  ? t("DocUpRe_Screen_HasError")
                  : t("DocUpRe_Screen_HasCorrect")}
              </HelperText>
            </Surface>

            <Surface style={styles.box_TextInput}>
              <TextInput
                mode="outlined"
                label={t("DocUpRe_Screen_Profile_Doc")}
                placeholder={t("DocUpRe_Screen_Profile_Doc_Placeholder")}
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
                {hasErrors_profile() ? t("DocUpRe_Screen_HasError") : t("DocUpRe_Screen_HasCorrect")}
              </HelperText>
            </Surface>
            {Platform.OS === "ios" ? IosCalendar : AndroidCalendar}
            <Surface style={styles.box_ImportLogo}>
              <Surface style={styles.box_Icon}>
                {!photoLoaded ? <IconButton
                  icon="camera"
                  size={90}
                  onPress={pickImage}
                /> :
                  ImageLoaded
                }

              </Surface>

              <Text>{t("DocUpRe_Screen_Img_Text")}</Text>

            </Surface>

            <View style={styles.box_doubleButton_Medium}>
              <Button_Small
                title={t("DocUpRe_Screen_Delete_Button")}
                onPress={() => {
                  setConfirmRemoving(true)
                }}
                description={t("DocUpRe_Screen_Delete_Button")}
              />
              <Button_Small
                title={t("DocUpRe_Screen_Update_Button")}
                onPress={() => updateDoc(photoBase64)}
                description={t("DocUpRe_Screen_Update_Button")}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Provider >

  );
};

export default DocUpdateRemove_Screen;

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
  box_Icon: {
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
  box_doubleButton_Medium: {
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
