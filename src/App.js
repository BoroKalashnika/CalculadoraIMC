import React, { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Resultat from './components/Resultat';
import Calculadora from './components/Calculadora';
import Titol from './components/Titol';

function App() {
  const [pes, setPes] = useState('');
  const [alcada, setAlcada] = useState('');
  const [show, setShow] = useState('');

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setShow(false);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setShow(true);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const actualizarValores = (newPes, newAlcada) => {
    setPes(newPes);
    setAlcada(newAlcada);
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
              <Calculadora setVals={actualizarValores} />
            </View>
            <View style={styles.button}>
              {show && pes && alcada && <Resultat weight={pes} height={alcada} />}
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
