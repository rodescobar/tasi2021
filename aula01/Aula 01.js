import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.fundo}>

      <View style={ styles.caixa } >
      </View>

      <View style={[ styles.caixa, { backgroundColor: "yellow"} ]} >
      </View>

      <View style={[ styles.caixa, { backgroundColor: "blue"} ]} >
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",

    justifyContent: "space-evenly",

    backgroundColor: "tomato"
  },
  caixa: {
    width: 80,
    height: 80,
    backgroundColor: "green"
  }
});
