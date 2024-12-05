/**
 * 
 * @format
 */

import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

function App() {
  return (
    <PaperProvider>
      <View>
        
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
