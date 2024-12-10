import React, { useState } from 'react';
import { Button, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { CalcularIMC, CalcularIMCtxt } from '../functions/CalcularIMC';

function App(props) {
    const [showResult, setShowResult] = useState(false);

    const color = (val) => {
        if (val < 27) return "green";
        if (val < 40) return "orange";
        return "red";
    }

    return (
        <View style={styles.container}>
            <Button style={styles.button} icon="calculator" mode="contained" onPress={() => setShowResult(true)}>
                <Text style={styles.button}>Calcular</Text>
            </Button>
            {showResult && (
                <View style={styles.text}>
                    <Text style={{ color: 'grey', fontSize: 15 }}>Tens un IMC de {CalcularIMC(props.weight, props.height)}</Text>
                    <Text style={{ fontSize: 15, color: color(CalcularIMC(props.weight, props.height)) }}>{CalcularIMCtxt(props.weight, props.height)}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    button: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    text: {
        alignItems: 'center',
        marginTop: 10,
    }
});

export default App;
