import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.fundo}>
      <View style={{ flex: 2, backgroundColor: "black", width: "100%" }}>
        <View style={{ flex: 1, justifyContent: "flex-end", alignItems:"flex-end"}}>
          <Text style={{ color: "#fff", fontSize: "28"}}>5 + 5 - 8 + 10</Text>
        </View>

        <View style={{ flex: 2, justifyContent: "flex-end", alignItems:"flex-end" }}>
          <Text style={{ color: "#fff", fontSize: "48"}}>5.555</Text>
        </View>
      </View>

      <View style={{ flex: 5, backgroundColor: "#a1a1a1", width: "100%" }}>

        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "gray", width: "100%" }}>
          <View style={{ flex: 1, backgroundColor: "#ccc", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>C</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "#ccc", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>+/-</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "#ccc", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>%</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "orange", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>/</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "gray", width: "100%" }}>
          <View style={{ flex: 1, backgroundColor: "#ccc", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>7</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "#ccc", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>8</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "#ccc", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>9</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "orange", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>X</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "gray", width: "100%" }}>
          <View style={{ flex: 1, backgroundColor: "#ccc", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>4</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "#ccc", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>5</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "#ccc", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>6</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "orange", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>-</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "gray", width: "100%" }}>
          <View style={{ flex: 1, backgroundColor: "#ccc", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>1</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "#ccc", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>2</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "#ccc", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>3</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "orange", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>+</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "gray", width: "100%" }}>
          <View style={{ flex: 2, backgroundColor: "#ccc", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>0</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "#ccc", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>,</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "orange", margin: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ fontSize: 40 }}>=</Text>
          </View>
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
});
