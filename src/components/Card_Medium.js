import React, { useState } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { Button, Caption, Card, IconButton, Text, Title, Portal, Dialog } from "react-native-paper";
import { api } from "../utils/Api";
import { useNavigation } from "@react-navigation/native";

const Card_Medium = (props) => {
  const navigation = useNavigation();
  const [visibleWarning, setVisibleWarning] = useState(false);
  const date = new Date(props.effective_date);
  const currentDate = new Date();
  const differenceDate = currentDate.getTime() - date.getTime();
  const warning = Math.ceil(differenceDate / (1000 * 3600 * 24));

  return (
    <Card
      style={styles.box}
      onPress={() =>
        navigation.navigate("DocViewer_Screen", {
          image: api.apache + props.img_url + ".jpg",
        })
      }
    >
      <Portal>
        <Dialog visible={visibleWarning} dismissable={true} onDismiss={() => setVisibleWarning(false)}>
          <Dialog.Title>Caducitat</Dialog.Title>
          <Dialog.Content>
            <Text>Aquest document ja ha caducat o esta a punt de caducar.</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisibleWarning(false)}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <View
        key={props.indexKey}
        style={{ flexDirection: "row", maxHeight: 150 }}
      >
        <View style={{ flex: 2 }}>
          <Card.Content style={{ borderWidth: 0 }}>
            <Caption>Document: </Caption>
            <Title>{props.doc_name}</Title>
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Caption>Data: </Caption>
              <Text>
                {date.getDate().toString() +
                  "-" +
                  (date.getMonth() + 1).toString() +
                  "-" +
                  date.getFullYear().toString()}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Caption>Titular: </Caption>
              <Text>{props.profile}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Caption>Colec·ció: </Caption>
              <Text>{props.collection}</Text>
            </View>
          </Card.Content>
        </View>

        <View style={{ flex: 1 }}>
          <Card.Cover
            source={{ uri: api.apache + props.img_url + ".jpg" }}
            style={{ maxHeight: 90 }}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {warning > -10 ? (
              <IconButton
                icon="alert"
                size={30}
                onPress={() => setVisibleWarning(true)}
                color="#FF0000"
              />
            ) : (
              <></>
            )}

            <IconButton
              icon="pencil"
              size={30}
              onPress={() => console.log("editar")}
              color="#000000"
            />
          </View>
        </View>
      </View>
    </Card>
  );
};

export default Card_Medium;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 10,
    padding: (Dimensions.get("window").width * 2) / 100,
    marginHorizontal: (Dimensions.get("window").width * 4) / 100,
    marginVertical: (Dimensions.get("window").height * 1) / 100,
    elevation: 4,
  },
});
