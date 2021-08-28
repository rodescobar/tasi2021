import React, { useState, useEffect } from 'react'
import { View, Text, TextFiled, Button } from 'react-native'

import Tabela from './Tabela'

const dados = require("./fornecedores.json")

const App = () => {

  const [ nome, setNome ] = useState('')

  const colunas = [ "Nome", "Telefone", "Ativo", "Botão" ]

  const MostrarNome = ( name ) => {
    setNome( name ) 
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <Text>{ `Nome da pessoa: ${ nome }` }</Text>

      <Tabela colunas={ colunas } linhas={ dados } aoClicar={ MostrarNome } />
    </View>
  )
}

export default App