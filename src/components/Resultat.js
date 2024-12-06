import React from 'react';
import { Button, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

function App() {

    return (
        <View style={styles.container}>
            <Button style={styles.button} icon="calculator" mode="contained" onPress={() => console.log('Pressed')}>
                <Text style={styles.button}>Calcular</Text>
            </Button>
            <View style={styles.text}>
                <Text>asdasdasd</Text>
                <Text>asdasdasd</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    button: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    text:{
        alignItems: 'center',
    }
});

export default App;
