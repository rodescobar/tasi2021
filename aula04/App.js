import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import Tabela from './Tabela'

const App = () => {

  const [ nome, setNome ] = useState('')
  const [ telefone, setTelefone ] = useState('')
  const [ ativo, setAtivo ] = useState('')

  const [ dados, setDados ] = useState([])

  const colunas = [ "Nome", "Telefone", "Ativo", "Remover" ]

  const alimentaTabela = () => {
    var data = {
      nome: nome,
      telefone,
      ativo
    }

    setDados( [ ...dados, data ] )
  }

  const Remover = ( nome ) => {
    var lista = dados.filter( item => {
      return (item.nome != nome )?(item):("")
    })

    setDados( lista )
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ backgroundColor: "tomato", flex: 1 }}>
        <Text>Nome: </Text> 
        <TextInput 
          style={{ borderStyle: "solid", borderWidth: 1, borderColor: "#000", backgroundColor: "#ccc" }}
          value={ nome }
          onChange={ (e) => setNome( e.target.value )}
        />


        <Text>Telefone: </Text>
        <TextInput 
          style={{ borderStyle: "solid", borderWidth: 1, borderColor: "#000", backgroundColor: "#ccc" }}
          value={ telefone }
          onChange={ (e) => setTelefone( e.target.value )}
        />

        <Text>Ativo: </Text>
        <TextInput 
          style={{ borderStyle: "solid", borderWidth: 1, borderColor: "#000", backgroundColor: "#ccc" }}
          value={ ativo }
          onChange={ (e) => setAtivo( e.target.value )}
        />
        
        <Button title={ "Incluir "} onPress={ () => alimentaTabela() }/>
      </View>

      <View style={{ flex: 2 }} >
        <Tabela colunas={ colunas } linhas={ dados } aoClicar={ Remover } />
      </View>
    </View>
  )
}

export default App