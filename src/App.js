/**
 * 
 * @format
 */

import React, { useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Calculadora from './components/Calculadora'
import Titol from './components/Titol'

function App() {
  const [imc, setImc] = useState('');
  const [txtImc, setTxtImc] = useState('');

  const actualizarValores = (newImc, newTxtImc) => {
    setImc(newImc);
    setTxtImc(newTxtImc);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Titol />
        <View style={styles.input}>
          <Calculadora onCalcIMC={actualizarValores} />
          {console.log(imc + txtImc)}
        </View>
        <View style={styles.button}>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
  },
  button: {
    flex: 1,
  }

});

export default App;
