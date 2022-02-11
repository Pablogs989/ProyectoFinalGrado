import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { Dialog, RadioButton, Surface } from 'react-native-paper';
import RadioButton_Horizontal from '../components/RadioButton_Horizontal';
import Button_Small from '../components/Button_Small';


const Filter_MainScreen_MD = ({navigation: {navigate}}, props) => {

    const [value_Colection, setValue_Colection] = React.useState("Tots");

    const hideDialog_Cancel = () => navigate("Main_Screen");
    const hideDialog_Confirm = () => {
        navigate({
            name: "Main_Screen", 
            params: {colection: value_Colection},
            marge: true,
        });        
    }

    return (
        <View style={{flex:1, backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
            <Dialog visible={true} onDismiss={hideDialog_Cancel}>
                <Dialog.Title style={{alignSelf:"center"}}>Opcions de Filtrat dels Documents</Dialog.Title>
                <Dialog.Content>
                    <Surface style={{borderWidth:1, borderRadius:10, elevation:10, marginVertical:20}}>
                        <RadioButton.Group onValueChange={newValue => setValue_Colection(newValue)} value={value_Colection}>
                            <RadioButton_Horizontal value="Tots" text="Totes les coleccions" />
                            <RadioButton_Horizontal value="identitat" text="identitat" />
                            <RadioButton_Horizontal value="salut" text="salut" />
                            <RadioButton_Horizontal value="allotjament" text="allotjament" />
                            <RadioButton_Horizontal value="transport" text="transport" />
                            <RadioButton_Horizontal value="viatjes" text="viatjes" />
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