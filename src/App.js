/**
 * 
 * @format
 */

import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Titol from './components/Titol'

function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Titol />
      </View>
      <View style={styles.input}>

      </View>
      <View style={styles.button}>

      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex:1,
  },
  button: {
    flex:1,
  }

});

export default App;
