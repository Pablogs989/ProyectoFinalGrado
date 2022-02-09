import * as React from 'react';
import { View, Dimensions, StyleSheet} from 'react-native';
import { Button, FAB, Paragraph, Dialog, Portal, Provider, RadioButton, Text, Surface } from 'react-native-paper';
import RadioButton_Horizontal from '../components/RadioButton_Horizontal';
import Button_Small from '../components/Button_Small';


const Filter_MainScreen_MD = ({navigation: {navigate}}, props) => {

    const [value_Colection, setValue_Colection] = React.useState("Tots");
    const [value_Owner, setValue_Owner] = React.useState("Tots");
    const [value_Favorit, setValue_Favorit] = React.useState("Tots");


    const hideDialog_Cancel = () => navigate("Main_Screen");
    const hideDialog_Confirm = () => {
        navigate({
            name: "Main_Screen", 
            params: {colection: value_Colection, owner: value_Owner, favorit: value_Favorit}, 
            marge: true,
        });
    }

    return (
        <View style={{flex:1, backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
            <Dialog visible={true} onDismiss={hideDialog_Cancel}>
                <Dialog.Title style={{alignSelf:"center"}}>Opcions de Filtrat dels Documents</Dialog.Title>
                <Dialog.Content>
                    <Surface style={{borderWidth:1, borderRadius:10, elevation:10}}>
                        <RadioButton.Group onValueChange={newValue => setValue_Owner(newValue)} value={value_Owner}>
                            <RadioButton_Horizontal value="Tots" text="Tots els titulars" />
                            <RadioButton_Horizontal value="usuari" text="usuari" />
                            <RadioButton_Horizontal value="Rosa" text="Rosa" />
                        </RadioButton.Group>
                    </Surface>
                    <Surface style={{borderWidth:1, borderRadius:10, elevation:10, marginVertical:20}}>
                        <RadioButton.Group onValueChange={newValue => setValue_Colection(newValue)} value={value_Colection}>
                            <RadioButton_Horizontal value="Tots" text="Totes les coleccions" />
                            <RadioButton_Horizontal value="identitat" text="identitat" />
                            <RadioButton_Horizontal value="salut" text="salut" />
                            <RadioButton_Horizontal value="allotjament" text="allotjament" />
                            <RadioButton_Horizontal value="transport" text="transport" />
                        </RadioButton.Group>
                    </Surface>

                    <Surface style={{borderWidth:1, borderRadius:10, elevation:10}}>
                        <RadioButton.Group onValueChange={newValue => setValue_Favorit(newValue)} value={value_Favorit}>
                            <RadioButton_Horizontal value="Tots" text="Tots, favorits i no favorits per a tu" />
                            <RadioButton_Horizontal value="true" text="Favorits" />
                            <RadioButton_Horizontal value="false" text="No Favorits" />
                        </RadioButton.Group>                                
                    </Surface>
                </Dialog.Content>
                <Dialog.Actions  style={styles.box_doubleButton_Pequenyo}>
                    <Button_Small titulo="Cancel·lar" alPresionar={hideDialog_Cancel} descripcion="Cancel·lar" />
                    <Button_Small titulo="Confirmar" alPresionar={hideDialog_Confirm} descripcion="Confirmar" />                           
                </Dialog.Actions>
            </Dialog>
        </View>
    );
};

export default Filter_MainScreen_MD;

const styles = StyleSheet.create({
    box_doubleButton_Pequenyo:{
        flexDirection: "row",
        paddingBottom: 15,
        justifyContent: "space-evenly",        
    },
  })