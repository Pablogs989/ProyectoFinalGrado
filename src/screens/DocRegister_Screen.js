import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {HelperText, IconButton, Provider, Surface, Text, TextInput } from 'react-native-paper';
import Appbar_Common from '../components/Appbar_Common';
import Button_Medium from '../components/Button_Medium';
import { array_Projects } from '../utils/ArrayProjects';


const DocRegister_Screen = ({route, navigation: {navigate}}) => {

    //Lógica entrada Ciclo: DAM, ASIR, DAW, A3DJEI
    const llistaCycles = ["A3DJEI", "ASIR", "DAM", "DAW"];

    const [cycle, setCycle] = useState('');
    const [visible_Cycle, setVisible_Cycle] = useState(false);
    const handleOnFocus_Cycle = () => {
        setVisible_Cycle(false);
    }
    const handleChangeText_Cycle = (event) => {
        setCycle(event);
    }
    const handleOnBlur_Cycle = () => {
        setVisible_Cycle(cycle.length>0);
    }
    const handleOnPress_IconClose_Cycle = () =>{
        setCycle('');
    }
    const esCycle = (x) => {
       return x.toUpperCase() === cycle.toUpperCase();
    }
    const hasErrors_Cycle = () => {
        return !llistaCycles.some(esCycle);
    }


    //Lógica entrada nombre del equipo
    const [equip, setEquip] = useState('');
    const [visible_Equip, setVisible_Equip] = useState(false);
    const handleOnFocus_Equip = () => {
        setVisible_Equip(equip.length>0);
    }
    const handleChangeText_Equip = (event) => {
        setEquip(event);
        setVisible_Equip(equip.length>0);
    }
    const handleOnBlur_Equip = () => {
        setVisible_Equip(equip.length>0);
    }
    const handleOnPress_IconClose_Equip = () => {
        setEquip('');
    }
    const esValido = () => {
        return
    }
    const esEspacio = (x) => {
        return x===' ';
    }
    const hasErrors_Equip = () => {
        let arrayName = equip.split("");
        return arrayName.every(esEspacio);

    }

    // Lógica entra Email
    const [email, setEmail] = useState('');
    const [visible_Email, setVisible_Email] = useState(false);
    const handleOnFocus_Email = () => {
        setVisible_Email(false);
    }
    const handleChangeText_Email = (event) => {
        setEmail(event);
    }
    const handleOnBlur_Email = () => {
        setVisible_Email(email.length>0);
    }
    const handleOnPress_IconClose_Email = () =>{
        setEmail('');
    }
    const hasErrors_Email = () => {
        let emailErroneo = !email.includes("@floridauniversitaria.es");
        return emailErroneo;
    }


    //Lógica entrada Titol
    const [title, setTitle] = useState('');
    const [visible_Title, setVisible_Title] = useState(false);
    const handleOnFocus_Title = () => {
        setVisible_Title(title.length>0);
    }
    const handleChangeText_Title = (event) => {
        setTitle(event);
        setVisible_Title(title.length>0);
    }
    const handleOnBlur_Title = () => {
        setVisible_Title(title.length>0);
    }
    const handleOnPress_IconClose_Title = () => {
        setTitle('');
    }
    const esEspacio_Title = (x) => {
        return x===" ";
    }
    const hasErrors_Title = () => {
        let arrayTitle = title.split("");
        return arrayTitle.every(esEspacio_Title);
    }


    //Lógica entrada Descripcio
    const [description, setDescription] = useState('');
    const handleChangeText_Description = (event) => {
        setDescription(event);
    }
    const handleOnPress_IconClose_Description = () => {
        setDescription('');
    }


    //Lógica afegir proyecte a array proyectes    
    let nuevoProyecto = {"titol":"", "equip":"", "email":"", "cicle":"", "descripcio":"", "logo":"", "votat":"no", "favorit":"no"};
    const handleOnPress_Confirmar = () =>{     
        nuevoProyecto.titol = title;
        nuevoProyecto.equip = equip;
        nuevoProyecto.email = email;
        nuevoProyecto.cicle = cycle;
        nuevoProyecto.descripcio = description;
        nuevoProyecto.logo = require("../assets/library_music_22762.png");  
        array_Projects.push(nuevoProyecto); 
        navigate('Main_Screen');
    }










    return (
        <Provider>
            <Appbar_Common alPresionar={() => navigate("Main_Screen")} titulo="Registro / Actualización Documento" />
            <View style={styles.box}>
                <View style={styles.falseCard}>
                <ScrollView>
                    <Surface style={styles.box_TextInput}>
                        <TextInput
                            mode="outlined"
                            label={"Cicle Formatiu:"}
                            placeholder="Introduïsca el nom del Cicle Formatiu: ASIR, DAM, DAW, etc."
                            activeOutlineColor="#0702F0"
                            onFocus={handleOnFocus_Cycle}
                            onChangeText={handleChangeText_Cycle}
                            value={cycle}
                            onBlur={handleOnBlur_Cycle}
                            right={<TextInput.Icon name='close' onPress={handleOnPress_IconClose_Cycle} />}
                            />
                        <HelperText visible={visible_Cycle} type={hasErrors_Cycle()? "error" : "info"} >
                            {hasErrors_Cycle() ? "¡¡Error!! Cicle no vàlid. El cicle formatiu introduït no existeix." : "Cicle vàlid"}
                        </HelperText>
                    </Surface>
    
                    <Surface style={styles.box_TextInput}>
                        <TextInput
                            mode="outlined"
                            label={"Nom de l'Equip:"}
                            placeholder="Introduïsca el nom de l'equip"
                            activeOutlineColor="#0702F0"
                            onFocus={handleOnFocus_Equip}
                            onChangeText={handleChangeText_Equip}
                            value={equip}
                            onBlur={handleOnBlur_Equip}
                            right={<TextInput.Icon name='close' onPress={handleOnPress_IconClose_Equip} />}
                            />
                        <HelperText visible={visible_Equip} type={hasErrors_Equip()? "error" : "info"} >
                            {hasErrors_Equip() ? "¡¡Error!! Nom no vàlid. El nom ha de contindre caràcters alfanumèrics." : "Nom vàlid"}
                        </HelperText>
                    </Surface>
    
                    <Surface style={styles.box_TextInput}>
                        <TextInput
                            mode="outlined"
                            label={"Email de l'Equip:"}
                            placeholder="Introduïsca el email de l'equip"
                            activeOutlineColor="#0702F0"
                            keyboardType='email-address'
                            onFocus={handleOnFocus_Email}
                            onChangeText={handleChangeText_Email}
                            value={email}
                            onBlur={handleOnBlur_Email}
                            right={<TextInput.Icon name="close" onPress={handleOnPress_IconClose_Email} />}
                            />
                        <HelperText visible={visible_Email} type={hasErrors_Email() ? "error" : "info"} >
                            {hasErrors_Email() ? "¡¡Error!! Email no vàlid. L'email ha de pertànyer al domini '@floridauniversitaria.es'." : "Email vàlid"}
                        </HelperText>
                    </Surface>
    
                    <Surface style={styles.box_TextInput}>
                        <TextInput
                            mode="outlined"
                            label={"Títol del Projecte:"}
                            placeholder="Introduïsca el títol del projecte"
                            activeOutlineColor="#0702F0"
                            onFocus={handleOnFocus_Title}
                            onChangeText={handleChangeText_Title}
                            value={title}
                            onBlur={handleOnBlur_Title}
                            right={<TextInput.Icon name='close' onPress={handleOnPress_IconClose_Title} />}
                            />
                        <HelperText visible={visible_Title} type={hasErrors_Title()? "error" : "info"} >
                            {hasErrors_Title() ? "¡¡Error!! Títol no vàlid. El títol ha de contindre caràcters alfanumèrics." : "Títol vàlid"}
                        </HelperText>
                    </Surface>
    
                    <Surface style={styles.box_TextInput}>
                        <TextInput
                            mode="outlined"
                            multiline={true}
                            numberOfLines={8}
                            label={"Descripció del Projecte:"}
                            placeholder="Introduïsca la descripció del projecte"
                            activeOutlineColor="#0702F0"
                            onChangeText={handleChangeText_Description}
                            value={description}
                            right={<TextInput.Icon name='close' onPress={handleOnPress_IconClose_Description} />}
                            />
                    </Surface>
    
                    <Surface style={styles.box_ImportLogo}>
                        <Surface style={styles.box_Icona}>
                            <IconButton
                                icon="camera"
                                size={90}
                                onPress={() => console.log('Pressed')}
                                />
                        </Surface>
    
                        <Surface style={{backgroundColor: "#A7CAD9"}}>
                            <Text>Afig la imatge pressionant sobre l'icona.</Text>
                            <Text />
                            <Text>Requisits de la imatge:</Text>
                            <Text>    - Grandària màxima: 10MB</Text>
                            <Text>    - Màxim d'arxius: 1</Text>
                            <Text>    - Arxius acceptats: .gif .jpeg .png</Text>
                        </Surface>
                    </Surface>
    
                    <View style={styles.box_doubleButton_Mediano}>
                        <Button_Medium  titulo="Cancel" alPresionar={() => navigate('Main_Screen')} descripcion="Cancel·lar" />
                        <Button_Medium  titulo="Confirm" alPresionar={handleOnPress_Confirmar} descripcion="Confirmar" />
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
}

export default DocRegister_Screen;

const styles = StyleSheet.create({
    box:{
        flex:1,
        backgroundColor: '#26528C',
        height: Dimensions.get("window").height,
        alignItems: "center"
    },

    falseCard:{
        backgroundColor:'#A7CAD9',
        borderRadius:20,
        height: Dimensions.get("window").height*81/100,
        width: Dimensions.get("window").width*90/100,
        marginTop: Dimensions.get("window").height*2/100,
        padding: 10
    },
    box_Headline:{
        backgroundColor: "#A7CAD9",
        borderWidth: 0,
        marginHorizontal: 15,
        marginVertical: 20,
        padding: 0,
        alignItems: 'center',
        elevation: 0,
    },
    box_TextInput:{
        backgroundColor: "#A7CAD9",
        borderWidth: 0,
        marginHorizontal: 15,
        marginVertical: 7,
        padding: 0,
        elevation: 0,
    },
    box_ImportLogo:{
        backgroundColor: "#A7CAD9",
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'grey',
        marginHorizontal: 15,
        marginVertical: 30,
        padding: 0,
        height: 305,
        alignItems: 'center',
        elevation: 0,
    },
    box_Icona:{
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'grey',
        marginHorizontal: 15,
        marginTop: 20,
        marginBottom: 5,
        padding: 0,
        height: 150,
        width: 300,
        alignItems: 'center',
        elevation: 0,
    },
    box_doubleButton_Mediano:{
        flexDirection: "row",
        backgroundColor: "#A7CAD9",
        borderWidth: 0,
        paddingBottom: 20,
        justifyContent: "space-evenly",
        elevation: 0,
    },
})