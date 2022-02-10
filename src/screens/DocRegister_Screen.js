import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { HelperText, IconButton, Provider, Surface, Text, TextInput, List } from 'react-native-paper';
import Appbar_Common from '../components/Appbar_Common';
import Button_Medium from '../components/Button_Medium';
import { array_Projects } from '../utils/ArrayProjects';
import DocumentTypesList from '../components/DocumentTypesList';
import DatePicker from 'react-native-date-picker';

const DocRegister_Screen = ({ route, navigation: { navigate } }) => {

    const [typeDocument, setTypeDocument] = useState('');
    const [visible_typeDocument, setVisible_typeDocument] = useState(false);
    const handleOnFocus_typeDocument = () => {
        setVisible_typeDocument(false);
    }
    const handleChangeText_typeDocument = (event) => {
        setTypeDocument(event);
    }
    const handleOnBlur_typeDocument = () => {
        setVisible_typeDocument(typeDocument.length > 0);
    }
    const handleOnPress_IconClose_typeDocument = () => {
        setTypeDocument('');
    }


    //Lógica entrada nombre documento
    const [nameDocument, setNameDocument] = useState('');
    const [visible_nameDocument, setVisible_nameDocument] = useState(false);
    const handleOnFocus_nameDocument = () => {
        setVisible_nameDocument(nameDocument.length > 0);
    }
    const handleChangeText_nameDocument = (event) => {
        setNameDocument(event);
        setVisible_nameDocument(nameDocument.length > 0);
    }
    const handleOnBlur_nameDocument = () => {
        setVisible_nameDocument(nameDocument.length > 0);
    }
    const handleOnPress_IconClose_nameDocument = () => {
        setNameDocument('');
    }
    const esValido = () => {
        return
    }
    const esEspacio = (x) => {
        return x === ' ';
    }
    const hasErrors_nameDocument = () => {
        let arrayName = nameDocument.split("");
        return arrayName.every(esEspacio);

    }

    //Lógica entrada perfil
    const [profile, setProfile] = useState('');
    const [visible_profile, setVisible_profile] = useState(false);
    const handleOnFocus_profile = () => {
        setVisible_profile(profile.length > 0);
    }
    const handleChangeText_profile = (event) => {
        setProfile(event);
        setVisible_profile(profile.length > 0);
    }
    const handleOnBlur_profile = () => {
        setVisible_profile(profile.length > 0);
    }
    const handleOnPress_IconClose_profile = () => {
        setProfile('');
    }
    const hasErrors_profile = () => {
        let arrayName = nameDocument.split("");
        return arrayName.every(esEspacio);
    }

    //Lógica afegir proyecte a array proyectes    
    let newDocument = { "typeDocument": "", "nameDocument": "", "date": "", "profile": "", "image": "" };
    const handleOnPress_Confirmar = () => {
        newDocument.typeDocument = typeDocument;
        newDocument.nameDocument = nameDocument;
        newDocument.date = date;
        newDocument.profile = profile;
        newDocument.image = require("../assets/library_music_22762.png");
        array_Projects.push(newDocument);
        navigate('Main_Screen');
    }

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <Provider>
            <Appbar_Common alPresionar={() => navigate("Main_Screen")} titulo="Registro / Actualización Documento" />
            <View style={styles.box}>
                <View style={styles.falseCard}>
                    <ScrollView>

                        <Surface style={styles.box_TextInput}>
                            <DocumentTypesList title="Tipus de document:"></DocumentTypesList>
                        </Surface>

                        <Surface style={styles.box_TextInput}>
                            <TextInput
                                mode="outlined"
                                label={"Nom del document:"}
                                placeholder="Introduïsca el nom de l'equip"
                                activeOutlineColor="#0702F0"
                                onFocus={handleOnFocus_nameDocument}
                                onChangeText={handleChangeText_nameDocument}
                                value={nameDocument}
                                onBlur={handleOnBlur_nameDocument}
                                right={<TextInput.Icon name='close' onPress={handleOnPress_IconClose_nameDocument} />}
                            />
                            <HelperText visible={visible_nameDocument} type={hasErrors_nameDocument() ? "error" : "info"} >
                                {hasErrors_nameDocument() ? "¡¡Error!! Nom no vàlid." : "Nom vàlid"}
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
                                value={nameDocument}
                                onBlur={handleOnBlur_profile}
                                right={<TextInput.Icon name='close' onPress={handleOnPress_IconClose_profile} />}
                            />
                            <HelperText visible={visible_profile} type={hasErrors_profile() ? "error" : "info"} >
                                {hasErrors_profile() ? "¡¡Error!! Nom no vàlid." : "Nom vàlid"}
                            </HelperText>
                        </Surface>

                        <DatePicker
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
                        />

                        <Surface style={styles.box_TextInput}>
                            <TextInput
                                mode="outlined"
                                label={"Data de caducitat:"}
                                activeOutlineColor="#0702F0"
                                onChangeText={handleChangeText_nameDocument}
                                value={date.getDate().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getFullYear().toString()}
                                editable={false}

                                right={<TextInput.Icon name='calendar' onPress={() => setOpen(true)} />}
                            />
                        </Surface>

                        <Surface style={styles.box_ImportLogo}>
                            <Surface style={styles.box_Icona}>
                                <IconButton
                                    icon="camera"
                                    size={90}
                                    onPress={() => navigate('LogIn_Screen')}
                                />
                            </Surface>

                            <Text>Afig la imatge pressionant sobre l'icona.</Text>
                        </Surface>

                        <View style={styles.box_doubleButton_Mediano}>
                            <Button_Medium titulo="Cancel" onPress={() => navigate('Main_Screen')} descripcion="Cancel·lar" />
                            <Button_Medium titulo="Create" onPress={handleOnPress_Confirmar} descripcion="Crear" />
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
    box: {
        flex: 1,
        backgroundColor: '#26528C',
        height: Dimensions.get("window").height,
        alignItems: "center"
    },

    falseCard: {
        backgroundColor: '#A7CAD9',
        borderRadius: 20,
        height: Dimensions.get("window").height * 81 / 100,
        width: Dimensions.get("window").width * 90 / 100,
        marginTop: Dimensions.get("window").height * 2 / 100,
        padding: 10
    },
    box_Headline: {
        backgroundColor: "#A7CAD9",
        borderWidth: 0,
        marginHorizontal: 15,
        marginVertical: 20,
        padding: 0,
        alignItems: 'center',
        elevation: 0,
    },
    box_TextInput: {
        backgroundColor: "#A7CAD9",
        borderWidth: 0,
        marginHorizontal: 5,
        marginVertical: 7,
        padding: 0,
        elevation: 0,
    },
    box_ImportLogo: {
        backgroundColor: "#A7CAD9",
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'grey',
        marginHorizontal: 15,
        marginVertical: 10,
        padding: 0,
        height: 200,
        alignItems: 'center',
        elevation: 0,
    },
    box_Icona: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'grey',
        marginHorizontal: 15,
        marginBottom: 5,
        padding: 0,
        height: 166,
        width: 300,
        alignItems: 'center',
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
})