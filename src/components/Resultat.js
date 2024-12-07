import React, { useState } from 'react';
import { Button, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

function App(props) {
    const [showResult, setShowResult] = useState(false);
    const [asd, setAsd] = useState(false);

    const showCalc = () => {
        setShowResult(true);
    };

    const a = () => {
        if (props.valImc != asd) setShowResult(false);
    }

    const color = () => {
        if (props.valImc < 27) return "green";
        if (props.valImc < 40) return "orange";
        return "red";
    }

    return (
        <View style={styles.container}>
            <Button style={styles.button} icon="calculator" mode="contained" onPress={showCalc}>
                <Text style={styles.button}>Calcular</Text>
            </Button>
            {showResult && a && (
                <View style={styles.text}>
                    <Text style={{ color: 'grey' }}>Tens un IMC de {props.valImc}</Text>
                    <Text style={{ color: color() }}>{props.valTxtImc}</Text>
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
