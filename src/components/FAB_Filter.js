import * as React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Button, FAB, Paragraph, Dialog, Portal, Provider, RadioButton, Text, Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button_Small from './Button_Small';
import RadioButton_Horizontal from './RadioButton_Horizontal';


const FAB_Filter = (props) => {

    const [value_Cycle, setValue_Cycle] = React.useState("Tots");
    const [value_Favorit, setValue_Favorit] = React.useState("Tots");
    const [value_Votat, setValue_Votat] = React.useState("Tots");


    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog_Cancel = () => setVisible(false);
    const hideDialog_Confirm = () => {
        setVisible(false);
        props.tornaValors({cicle: value_Cycle, favorit: value_Favorit, votat: value_Votat});
        console.log("Fab -->"+value_Cycle+ " "+value_Favorit+ " "+value_Votat);
    }

    return (
        // <Provider settings={{ icon: (props) => <Icon {...props} size={28} color='black'/>, }} >
        <Provider>
            <Surface>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog_Cancel}>
                        <Dialog.Title>Opcions de Filtrat de Projectes</Dialog.Title>
                        <Dialog.Content>
                            <Surface style={{borderWidth:1, borderRadius:10, elevation:10}}>
                                <RadioButton.Group onValueChange={newValue => setValue_Cycle(newValue)} value={value_Cycle}>
                                    <RadioButton_Horizontal value="Tots" text="Tots els cicles" />
                                    <RadioButton_Horizontal value="ASIR" text="ASIR" />
                                    <RadioButton_Horizontal value="AS3DJI" text="AS3DJI" />
                                    <RadioButton_Horizontal value="DAM" text="DAM" />
                                    <RadioButton_Horizontal value="DAW" text="DAW" />
                                </RadioButton.Group>
                            </Surface>
                            <Surface style={{borderWidth:1, borderRadius:10, elevation:10, marginVertical:20}}>
                                <RadioButton.Group onValueChange={newValue => setValue_Favorit(newValue)} value={value_Favorit}>
                                    <RadioButton_Horizontal value="Tots" text="Tots, favorits i no favorits per a tu" />
                                    <RadioButton_Horizontal value="si" text="Favorits" />
                                    <RadioButton_Horizontal value="no" text="No Favorits" />
                                </RadioButton.Group>                                
                            </Surface>
                            <Surface style={{borderWidth:1, borderRadius:10, elevation:10}}>
                                <RadioButton.Group onValueChange={newValue => setValue_Votat(newValue)} value={value_Votat}>
                                    <RadioButton_Horizontal value="Tots" text="Tots, votats i no votats per tu" />
                                    <RadioButton_Horizontal value="si" text="Votats" />
                                    <RadioButton_Horizontal value="no" text="No Votats" />
                                </RadioButton.Group>
                            </Surface>
                        </Dialog.Content>
                        <Dialog.Actions  style={styles.box_doubleButton_Pequenyo}>
                            <Button_Small titulo="Cancel·lar" alPresionar={hideDialog_Cancel} descripcion="Cancel·lar" />
                            <Button_Small titulo="Confirmar" alPresionar={hideDialog_Confirm} descripcion="Confirmar" />                           
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                <FAB
                    style={styles.fab}
                    big
                    // icon="filter-list"
                    icon="filter"
                    onPress={showDialog}
                />
            </Surface>
            
        </Provider>
    );
};

export default FAB_Filter;

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
    //   marginLeft: Dimensions.get("window").width*1/100,
      right: 0,
      bottom: 30,      
      backgroundColor:"#F6C602",
    },
    box_doubleButton_Pequenyo:{
        flexDirection: "row",
        paddingBottom: 15,
        justifyContent: "space-evenly",        
    },
  })