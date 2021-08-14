//https://snack.expo.dev/@rodescobar/95fe58


import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function App() {

  const [ displayMenor, setDisplayMenor ] = useState("")
  const [ display, setDisplay ] = useState("")

  const setNumero = ( numero ) => {
    setDisplay( display.concat(numero) )
  }

  const setSinal = ( sinal ) => {
    var atual = display
    setDisplayMenor( displayMenor + " " + atual + " " + sinal )

    setDisplay( "" )
  }

  const setIgual = () => {
    var atual = display

    setDisplayMenor( displayMenor + atual ) 

    var conta = eval( displayMenor )
    setDisplay( conta )
  }

  return (
    <View style={styles.fundo}>
      <View style={{ flex: 2, backgroundColor: "black", width: "100%" }}>
        <View style={{ flex: 1, justifyContent: "flex-end", alignItems:"flex-end"}}>
          <Text style={{ color: "#fff", fontSize: "28", marginRight: 20}}>
            { displayMenor }
          </Text>
        </View>

        <View style={{ flex: 2, justifyContent: "flex-end", alignItems:"flex-end" }}>
          <Text style={{ color: "#fff", fontSize: 48}}>
            { display }
          </Text>
        </View>
      </View>

      <View style={{ flex: 5, backgroundColor: "#a1a1a1", width: "100%" }}>

        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "gray", width: "100%" }}>
          <TouchableHighlight style={ styles.botaoCinza } >
            <Text style={{ fontSize: 40 }}>C</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza } >
            <Text style={{ fontSize: 40 }}>+/-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza } >
            <Text style={{ fontSize: 40 }}>%</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoLaranja } >
            <Text style={{ fontSize: 40 }} onPress={ () => setSinal("/")}>/</Text>
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "gray", width: "100%" }}>
          <TouchableHighlight style={ styles.botaoCinza } >
            <Text style={{ fontSize: 40 }} onPress={() => setNumero("7") }>
              7
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza } >
            <Text style={{ fontSize: 40 }} onPress={() => setNumero("8") }>
              8
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza } onPress={() => setNumero("9") } >
            <Text style={{ fontSize: 40 }}>
              9
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoLaranja } >
            <Text style={{ fontSize: 40 }}>X</Text>
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "gray", width: "100%" }}>
          <TouchableHighlight style={ styles.botaoCinza } >
            <Text style={{ fontSize: 40 }} onPress={() => setNumero("4") }>4</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza } >
            <Text style={{ fontSize: 40 }} onPress={() => setNumero("5") }>5</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza } >
            <Text style={{ fontSize: 40 }} onPress={() => setNumero("6") }>6</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoLaranja } >
            <Text style={{ fontSize: 40 }}>-</Text>
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "gray", width: "100%" }}>
          <TouchableHighlight style={ styles.botaoCinza } >
            <Text style={{ fontSize: 40 }} onPress={() => setNumero("1") }>1</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza } >
            <Text style={{ fontSize: 40 }} onPress={() => setNumero("2") }>2</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza } >
            <Text style={{ fontSize: 40 }} onPress={() => setNumero("3") }>3</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoLaranja } >
            <Text style={{ fontSize: 40 }}>+</Text>
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "gray", width: "100%" }}>
          <TouchableHighlight style={[ styles.botaoCinza, { flex: 2 }]} >
            <Text style={{ fontSize: 40 }} onPress={() => setNumero("0") }>0</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza } >
            <Text style={{ fontSize: 40 }}>,</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoLaranja } onPress={ () => setIgual() }>
            <Text style={{ fontSize: 40 }}>=</Text>
          </TouchableHighlight>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "gray"
  },
  botaoCinza: {
    flex: 1, 
    backgroundColor: "#ccc", 
    margin: 1, 
    alignItems: "center", 
    justifyContent: "center"
  },
  botaoLaranja: {
    flex: 1, 
    backgroundColor: "orange", 
    margin: 1, 
    alignItems: "center", 
    justifyContent: "center"
  }
});