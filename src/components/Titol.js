import React from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

function Titol() {
    return (
        <View style={styles.container}>
            <View style={styles.titleMain}>
                <Text>Calculadora</Text>
                <View style={styles.title}><Text>IMC</Text></View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleMain: {
        flex: 1,
    },
    title: {
        flex: 1,
        alignItems: 'center'
    },
});

export default Titol;
