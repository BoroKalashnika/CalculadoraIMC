import React, { useState, useEffect } from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import { StyleSheet, View, Dimensions } from 'react-native';

const windowDimensions = Dimensions.get('window');

function App() {
    const [pes, setPes] = useState(0);
    const [alcada, setAlcada] = useState(0);
    const [dimensions, setDimensions] = useState({ window: windowDimensions });

    let width = (dimensions.window.width / 2);

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
            'change',
            ({ window }) => {
                setDimensions({ window });
            },
        );
        return () => subscription?.remove();
    });

    const onChangeKg = pes => setPes(pes);
    const onChangeM = alcada => setAlcada(alcada);

    const hasErrorsKg = () => {
        return pes <= 0;
    };

    const hasErrorsM = () => {
        return alcada <= 0;
    };

    return (
        <View style={styles.container}>
            <View style={styles.weight}>
                <TextInput style={{ width: width }} inputMode='numeric' right={<TextInput.Affix text="Kg." />} mode="outlined" label="Pes (kg)" value={pes} onChangeText={onChangeKg} />
                <HelperText type="error" visible={hasErrorsKg()}>
                    El pes ha de ser major de 0.0 kg
                </HelperText>
            </View>
            <View style={styles.weight}>
                <TextInput style={{ width: width }} inputMode='numeric' right={<TextInput.Affix text="m." />} mode="outlined" label="Alçada (m)" value={alcada} onChangeText={onChangeM} />
                <HelperText type="error" visible={hasErrorsM()}>
                    L'alçada ha de ser major de 0.0 m.
                </HelperText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    weight: {
        margin: 5,
    },

});

export default App;
