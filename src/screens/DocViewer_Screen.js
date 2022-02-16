import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Provider, Surface } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Appbar_Common from "../components/Appbar_Common";
import ImageViewer from "react-native-image-zoom-viewer";
import { useTranslation } from "react-i18next";

const DocViewer_Screen = (props) => {
  const navigation = useNavigation();
  const images = [{ url: props.route.params.image }];
  const { t } = useTranslation();
  return (
    <Provider>
      <Appbar_Common
        onPress={() => navigation.navigate("Main_Screen")}
        title={t("DocViewer_Screen")}
      />
      <View style={styles.box}>
        <Surface style={styles.falseCard}>
          <ImageViewer
            imageUrls={images}
            backgroundColor="#A7CAD9"
          ></ImageViewer>
        </Surface>
      </View>
    </Provider>
  );
};

export default DocViewer_Screen;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#26528C",
    height: Dimensions.get("screen").height,
    alignItems: "center",
  },

  falseCard: {
    backgroundColor: "#A7CAD9",
    borderRadius: 20,
    height: (Dimensions.get("screen").height * 81) / 100,
    width: (Dimensions.get("screen").width * 95) / 100,
    marginTop: (Dimensions.get("screen").height * 1) / 100,
    padding: 10,
  },
});
