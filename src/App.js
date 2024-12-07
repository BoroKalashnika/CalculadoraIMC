/**
 * 
 * @format
 */

import React, { useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Resultat from './components/Resultat'
import Calculadora from './components/Calculadora'
import Titol from './components/Titol'

function App() {
  const [imc, setImc] = useState('');
  const [txtImc, setTxtImc] = useState('');
  const [show, setShow] = useState('');

  const actualizarValores = (newImc, newTxtImc, newShow) => {
    setImc(newImc);
    setTxtImc(newTxtImc);
    setShow(newShow);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.title}>
          <Titol />
        </View>
        <View style={styles.input}>
          <Calculadora onCalcIMC={actualizarValores} />
        </View>
        <View style={styles.button}>
          {show && (<Resultat valImc={imc} valTxtImc={txtImc} />)}
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
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
