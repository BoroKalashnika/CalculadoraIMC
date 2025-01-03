import React, { useState, useEffect } from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import { StyleSheet, View, Dimensions } from 'react-native';

const windowDimensions = Dimensions.get('window');

function Calculadora({ setVals }) {
    const [pes, setPes] = useState("");
    const [alcada, setAlcada] = useState("");
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

    const onChangeKg = (nuevoPes) => {
        setPes(nuevoPes);
        if (nuevoPes && pesValid.test(nuevoPes)) {
            setVals(nuevoPes, alcada);
        } else {
            setVals(null, alcada);
        }
    };

    const onChangeM = (nuevaAlcada) => {
        setAlcada(nuevaAlcada);
        if (nuevaAlcada && pesValid.test(nuevaAlcada)) {
            setVals(pes, nuevaAlcada);
        } else {
            setVals(pes, null);
        }
    };

    const pesValid = /^(\d+)$|^(\d*\.\d+)$/;
    const hasErrorsKg = () => {
        if (pes != 0) {
            return !pesValid.test(pes);
        }
    };

    const hasErrorsM = () => {
        if (alcada != 0) {
            return !pesValid.test(alcada);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.weight}>
                <TextInput style={{ width: width }} outlineColor='green' inputMode='numeric' right={<TextInput.Affix text="Kg." />} mode="outlined" label="Pes (kg)" value={pes} onChangeText={onChangeKg} />
                <HelperText type="error" style={{ flex: 1, }} right visible={hasErrorsKg()}>
                    {pes && ("Escriu el pes en Kg i amb valors positius ex:50.5")}
                </HelperText>
            </View>
            <View style={styles.weight}>
                <TextInput style={{ width: width }} outlineColor='yellow' inputMode='numeric' right={<TextInput.Affix text="m." />} mode="outlined" label="Alçada (m)" value={alcada} onChangeText={onChangeM} />
                <HelperText type="error" style={{ flex: 1, }} visible={hasErrorsM()}>
                    {alcada && ("Escriu l'alçada en m. i amb valors positius (ex:1.25)")}
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
        padding: 5,
        flexDirection: 'row'
    },

});

export default Calculadora;
