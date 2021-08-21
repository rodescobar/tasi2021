import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function App() {

  const [ displayMenor, setDisplayMenor ] = useState("")
  const [ display, setDisplay ] = useState("")

  const [ calcular, setCalcular ] = useState( false ) // <= true

  //useEffect para a verificação de mudanca no estado
  // [] => inicialização
  // Sem nada é a cada clique
  //Com variavel entre [] só executa qnd a variavel tem seu valor alterado
  useEffect( () => {

    if (calcular) {
      //displayMenor 5 x 5
      var result = displayMenor.replace('x', '*')//.replace(",",".")
      var aux = false

      console.log(result)
  
      while (aux === false) {

        if (result.indexOf(",") < 0)
          aux=true
        else
          result = result.replace(",",".")        
      }

      console.log(result)
      var conta = eval( result )
      setDisplay( conta ) 
      setDisplayMenor("")
      setCalcular(false)
    }
 
  }, [calcular] )

  //Ao escolher um numero
  const setNumero = ( numero ) => {
    var tela = ""

    if (display === undefined)
      tela = numero
    else
      tela = display + numero

    setDisplay( tela )
  }

  //Ao clicar em C (limpar)
  const setLimpar = () => {
    setDisplayMenor("")
    setDisplay("")
  }

  //Ao apertar uma função matematica
  const setSinal = ( sinal ) => {
    var atual = display

    if (sinal === "+-") {
      //atual = "-" + atual
      atual = -1 * atual
      setDisplayMenor( displayMenor + " " + atual )
    }
    else if (sinal === "%") {
      atual = atual / 100
      setDisplayMenor( displayMenor + " " + atual )
      setCalcular(true)
    }
    else 
      setDisplayMenor( displayMenor + " " + atual + " " + sinal )

    setDisplay( "" )
  }

  //Ao apertar =
  const setIgual = () => {
    var atual = display

    setDisplayMenor( displayMenor + " " + atual ) 

    setCalcular(true)
  }

  //Ao escolher a virgula
  const setVirgula = () => {

    var numero = ""
    if (display === "")
      numero = "0,"
    else {

      if ( display.indexOf(",") < 0 )
        numero = display + ","
      else 
        numero = display
    }

    setDisplay( numero ) 
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
          <TouchableHighlight style={ styles.botaoCinza } onPress={ () => setLimpar() } >
            <Text style={{ fontSize: 40 }}>C</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza } onPress={ () => setSinal("+-") }>
            <Text style={{ fontSize: 40 }}>+/-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza } onPress={ () => setSinal("%") } >
            <Text style={{ fontSize: 40 }}>%</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoLaranja }  onPress={ () => setSinal("/")}>
            <Text style={{ fontSize: 40 }}>/</Text>
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "gray", width: "100%" }}>
          <TouchableHighlight style={ styles.botaoCinza }  onPress={() => setNumero("7") }>
            <Text style={{ fontSize: 40 }}>
              7
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza } onPress={() => setNumero("8") } >
            <Text style={{ fontSize: 40 }}>
              8
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza } onPress={() => setNumero("9") } >
            <Text style={{ fontSize: 40 }}>
              9
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoLaranja } onPress={ () => setSinal("x")} >
            <Text style={{ fontSize: 40 }}>X</Text>
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "gray", width: "100%" }}>
          <TouchableHighlight style={ styles.botaoCinza }  onPress={() => setNumero("4") } >
            <Text style={{ fontSize: 40 }}>4</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza } onPress={() => setNumero("5") } >
            <Text style={{ fontSize: 40 }} >5</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza } onPress={() => setNumero("6") }>
            <Text style={{ fontSize: 40 }} >6</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoLaranja } onPress={ () => setSinal("-")} >
            <Text style={{ fontSize: 40 }}>-</Text>
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "gray", width: "100%" }}>
          <TouchableHighlight style={ styles.botaoCinza }  onPress={() => setNumero("1") }>
            <Text style={{ fontSize: 40 }}>1</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza }  onPress={() => setNumero("2") }>
            <Text style={{ fontSize: 40 }}>2</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza } onPress={() => setNumero("3") }>
            <Text style={{ fontSize: 40 }} >3</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoLaranja } onPress={ () => setSinal("+")}>
            <Text style={{ fontSize: 40 }}>+</Text>
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "gray", width: "100%" }}>
          <TouchableHighlight style={[ styles.botaoCinza, { flex: 2 }]} onPress={() => setNumero("0") } >
            <Text style={{ fontSize: 40 }}>0</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.botaoCinza } onPress={ () => setVirgula() }>
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