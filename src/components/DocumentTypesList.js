import * as React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const DocumentTypesList = () => {
    const [expanded] = React.useState(true);


    return (
        <List.Accordion
            style={styles.list}
            title="Tipus de document:">
            <List.Item style={styles.list}
                title="Salut" />
            <List.Item style={styles.list}
                title="Allotjaments" />
            <List.Item style={styles.list}
                title="Documentació" />
        </List.Accordion>


    );
};

export default DocumentTypesList

const styles = StyleSheet.create({
    list: {
        
        borderColor: '#858585',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 2,
    },
})