import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Appbar, Caption, Button, Headline, Paragraph, Provider, Surface, Subheading, Text, Title, TextInput, HelperText } from 'react-native-paper';
import Appbar_Common from '../components/Appbar_Common';
import Button_Medium from '../components/Button_Medium';


const SignUp_Screen = ({ route, navigation: { navigate } }) => {

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
        setVisible_Email(email.length > 0);
    }
    const handleOnPress_IconClose_Email = () => {
        setEmail('');
    }
    const hasErrors_Email = () => {
        let emailErroneo = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(email);
        return emailErroneo;
    }

    // Lógica entra Password
    const [password, setPassword] = useState('');
    const [visible_Password, setVisible_Password] = useState(false);
    const handleOnFocus_Password = () => {
        setVisible_Password(false);
    }
    const handleChangeText_Password = (event) => {
        setPassword(event);
    }
    const handleOnBlur_Password = () => {
        setVisible_Password(password.length > 0);
    }
    const handleOnPress_IconClose_Password = () => {
        setPassword('');
    }
    const hasErrors_Password = () => {
        let passwordErroneo = !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#.])[A-Za-z\d@$!%*?&.]{8,}$/i.test(password);

        return passwordErroneo;
    }

    // Lógica entra Password_Config
    const [password_Config, setPassword_Config] = useState('');
    const [visible_Password_Config, setVisible_Password_Config] = useState(false);
    const handleOnFocus_Password_Config = () => {
        setVisible_Password_Config(false);
    }
    const handleChangeText_Password_Config = (event) => {
        setPassword_Config(event);
    }
    const handleOnBlur_Password_Config = () => {
        setVisible_Password_Config(password_Config.length > 0);
    }
    const handleOnPress_IconClose_Password_Config = () => {
        setPassword_Config('');
    }
    const hasErrors_Password_Config = () => {
        let password_config_Erroneo = !(password_Config === password);
        return password_config_Erroneo;
    }
    return (
        <Provider>
            <Appbar_Common alPresionar={() => navigation.navigate("Main_Screen")} titulo="Sign Up" />
            <KeyboardAvoidingView
                behavior={'height'}
                style={styles.container}>
                <View style={styles.box}>
                    <Surface style={styles.falseCard}>

                        <Surface style={styles.box_TextInput}>
                            <TextInput
                                mode="outlined"
                                label={"Email:"}
                                placeholder="Introduïsca el email"
                                activeOutlineColor="#0702F0"
                                keyboardType='email-address'
                                onFocus={handleOnFocus_Email}
                                onChangeText={handleChangeText_Email}
                                value={email}
                                onBlur={handleOnBlur_Email}
                                right={<TextInput.Icon name="close" onPress={handleOnPress_IconClose_Email} />}
                            />
                            <HelperText visible={visible_Email} type={hasErrors_Email() ? "error" : "info"} >
                                {hasErrors_Email() ? "¡¡Error!! El email existix o no cumplix tots els parametres'." : "Email vàlid"}
                            </HelperText>
                        </Surface>
                        <Surface style={styles.box_TextInput}>
                            <TextInput
                                mode="outlined"
                                label={"Contrasenya:"}
                                placeholder="Introduïsca la contrasenya"
                                activeOutlineColor="#0702F0"
                                keyboardType='default'
                                onFocus={handleOnFocus_Password}
                                onChangeText={handleChangeText_Password}
                                value={password}
                                onBlur={handleOnBlur_Password}
                                right={<TextInput.Icon name="close" onPress={handleOnPress_IconClose_Password} />}
                            />
                            <HelperText visible={visible_Password} type={hasErrors_Password() ? "error" : "info"} >
                                {hasErrors_Password() ? "¡¡Error!! La contrasenya no cumplix els parametres de seguretat requerits" : "Contrasenya vàlida"}
                            </HelperText>
                        </Surface>

                        <Surface style={styles.box_TextInput}>
                            <TextInput
                                mode="outlined"
                                label={"Confirma Contrasenya:"}
                                placeholder="Confirma la contrasenya"
                                activeOutlineColor="#0702F0"
                                keyboardType='default'
                                onFocus={handleOnFocus_Password_Config}
                                onChangeText={handleChangeText_Password_Config}
                                value={password_Config}
                                onBlur={handleOnBlur_Password_Config}
                                right={<TextInput.Icon name="close" onPress={handleOnPress_IconClose_Password_Config} />}
                            />
                            <HelperText visible={visible_Password_Config} type={hasErrors_Password_Config() ? "error" : "info"} >
                                {hasErrors_Password_Config() ? "¡¡Error!! La contrasenya no es igual a la de arriba." : "Contrasenya vàlida"}
                            </HelperText>
                        </Surface>
                        <View style={styles.box_doubleButton_Mediano}>
                            <Button_Medium titulo="Registrar-se" alPresionar={() => navigate('Welcome_Screen')} descripcion="Registar-se" />

                        </View>


                    </Surface>
                </View>
            </KeyboardAvoidingView>
        </Provider>
    );
}

export default SignUp_Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        flex: 1,
        backgroundColor: '#26528C',
        height: Dimensions.get("screen").height,
        alignItems: "center"
    },
    box_TextInput: {
        backgroundColor: "#A7CAD9",
        borderWidth: 0,
        marginHorizontal: 15,
        marginVertical: 5,
        padding: 0,
        elevation: 0,
    },

    falseCard: {
        backgroundColor: '#A7CAD9',
        borderRadius: 20,
        height: Dimensions.get("window").height * 50 / 100,
        width: Dimensions.get("window").width * 90 / 100,
        marginTop: Dimensions.get("window").height * 2 / 100,
        padding: 10,
        justifyContent: 'center',
    },
    box_doubleButton_Mediano: {
        alignItems: 'center',
    }
})
