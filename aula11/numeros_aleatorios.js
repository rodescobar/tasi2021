import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


export default function App() {

  const Numero = () => {
    var aleatoria =  Math.floor( Math.random() * 10 )
    
    console.log( aleatoria )
  }

  return (
    <View style={ { flex: 1, alignItems: "center", justifyContent: "center"} }>
      <Text>
        <Button onPress={ () => Numero() } title="Botao" />
        Teste
      </Text>      
    </View>
  );
}
