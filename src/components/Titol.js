import React from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

function Titol() {
    return (
        <View style={styles.container}>
            <View style={styles.titleMain}>
                <Text style={{ fontSize: 35, }}>Calculadora</Text>
                <View style={styles.title}>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'green' }}>I</Text>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'blue' }}>M</Text>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'red' }}>G</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    titleMain: {
        flex: 1,
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default Titol;
