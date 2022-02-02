import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar, Caption ,Button, Headline, Paragraph, Provider, Subheading, Text, Title, View} from 'react-native-paper';
import Appbar_Common from '../components/Appbar_Common';


const DocInput_Screen = ({navigation}) => {
    return (
        <Provider>
            <Appbar_Common alPresionar={() => navigation.navigate("Main_Screen")} titulo="Scanner" />
        </Provider>
    );
}

export default DocInput_Screen;