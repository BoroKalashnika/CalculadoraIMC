import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Resultat from './components/Resultat';
import Calculadora from './components/Calculadora';
import Titol from './components/Titol';

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
      <KeyboardAvoidingView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.title}>
              <Titol />
            </View>
            <View style={styles.input}>
              <Calculadora onCalcIMC={actualizarValores} />
            </View>
            <View style={styles.button}>
              {show && <Resultat valImc={imc} valTxtImc={txtImc} />}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  title: {
    flex: 0.5,
  },
  input: {
    flex: 1,
  },
  button: {
    flex: 10,
  },
});

export default App;
