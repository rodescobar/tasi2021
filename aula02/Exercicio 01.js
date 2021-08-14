import React, { useState } from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native'

import Teste from './teste'

const App = () => {
  const [ contador, setContador ] = useState(0)

  const Clicou = () => {
    setContador( contador + 1 )
  }

  const objeto = { flex: 1, background: "tomato", justifyContent: "center", alignItems: "center" }

  return (
    <View style={ objeto }>
      <TouchableHighlight
        onPress={ () => Clicou() }
        style={{ background: "aqua", padding: 20, borderRadius: 20, borderColor: "green" }}
        underlayColor="pink"
      >
        <Text style={ estilo.texto }>Clique aqui</Text>
      </TouchableHighlight>

      <Text> Aqui: { contador } </Text>
      <Teste maria={ "Componente TEste: " + contador } />
    </View>
  )
}

export default App

const estilo = StyleSheet.create({
  texto: {
    color: "blue",
    fontSize: 28
  }
})