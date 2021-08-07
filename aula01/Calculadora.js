import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableHighlight } from 'react-native';

export default function App() {

  const onPress = () => {
    alert("oi")
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 2, width: "100%", backgroundColor: "#000", alignItems: "center", justifyContent: "center" }}>
        <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end", width: "100%" }}>
          <Text style={styles.textoDisplayPequeno}>{`5 + 550`}</Text>
        </View>
        <View style={{ flex: 2, justifyContent: "flex-end", alignItems: "flex-end", width: "100%" }}>
          <Text style={styles.textoDisplayGrande}>{`555`}</Text>
        </View>
      </View>
      <View style={{ flex: 6, backgroundColor: "gray", width: "100%" }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.cinzaEscuro}>
            <TouchableHighlight style={styles.cinzaEscuro} onPress={onPress}>
              <Text style={styles.textoBranco}>C</Text>
            </TouchableHighlight>
          </View>
          <TouchableHighlight underlayColor='rgba(255,255,255,0.9)' style={styles.cinzaEscuro} onPress={onPress}>
            <View>
              <Text style={styles.textoBranco}>+/-</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.cinzaEscuro}><Text style={styles.textoBranco}>%</Text></View>
          <View style={styles.laranjaClaro}><Text style={styles.textoBranco}>/</Text></View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.cinzaClaro}><Text style={styles.textoBranco}>7</Text></View>
          <View style={styles.cinzaClaro}><Text style={styles.textoBranco}>8</Text></View>
          <View style={styles.cinzaClaro}><Text style={styles.textoBranco}>9</Text></View>
          <View style={styles.laranjaClaro}><Text style={styles.textoBranco}>X</Text></View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.cinzaClaro}><Text style={styles.textoBranco}>4</Text></View>
          <View style={styles.cinzaClaro}><Text style={styles.textoBranco}>5</Text></View>
          <View style={styles.cinzaClaro}><Text style={styles.textoBranco}>6</Text></View>
          <View style={styles.laranjaClaro}><Text style={styles.textoBranco}>-</Text></View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.cinzaClaro}><Text style={styles.textoBranco}>1</Text></View>
          <View style={styles.cinzaClaro}><Text style={styles.textoBranco}>2</Text></View>
          <View style={styles.cinzaClaro}><Text style={styles.textoBranco}>3</Text></View>
          <View style={styles.laranjaClaro}><Text style={styles.textoBranco}>+</Text></View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={[styles.cinzaClaro, { flex: 2 }]}><Text style={styles.textoBranco}>0</Text></View>
          <View style={styles.cinzaClaro}><Text style={styles.textoBranco}>,</Text></View>
          <View style={styles.laranjaClaro}><Text style={styles.textoBranco}>=</Text></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cinzaEscuro: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a1a0a0",
    margin: 1,
  },
  cinzaClaro: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d2d1d1",
    margin: 1,
  },
  laranjaClaro: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f28d3a",
    margin: 1,
  },
  textoBranco: {
    fontSize: Dimensions.get('window').width / 12,
  },
  textoDisplayGrande: {
    fontSize: Dimensions.get('window').width / 4,
    color: "#fff",
  },
  textoDisplayPequeno: {
    fontSize: Dimensions.get('window').width / 12,
    color: "#fff",
  }
});