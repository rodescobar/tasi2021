import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.fundo}>

      <View style={{ flex:1, 
        backgroundColor: "green", 
        width: "100%", 
        flexDirection:"row",
        justifyContent:"space-between"
    
        }} >
        
        <View style={[ styles.caixa, { backgroundColor: "red"}]}></View>
        <View style={[ styles.caixa, { backgroundColor: "blue"}]}></View>
        <View style={[ styles.caixa, { backgroundColor: "purple"}]}></View>
      </View>
    
  
      <View style={{ 
        flex:3, 
        backgroundColor: "white", 
        width: "100%", 
        alignItems: "center", 
        justifyContent:"center" 
        }} >

        <View style={[ styles.caixa, { backgroundColor: "red"}]}></View>
        <View style={[ styles.caixa, { backgroundColor: "blue"}]}></View>
        <View style={[ styles.caixa, { backgroundColor: "purple"}]}></View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",

    backgroundColor: "tomato"
  },
  caixa: {
    width: 80,
    height: 80,
    backgroundColor: "gray"
  }
});
