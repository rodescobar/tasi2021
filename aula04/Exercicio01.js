import React, { useState, useEffect } from 'react'
import { View, Text, TextFiled, Button } from 'react-native'

const App = () => {

  const [ valor, setValor ] = useState(0)
  const [ total, setTotal ] = useState(0)

  const Evento = () => {
    //Setando um novo valor para valor
    setValor( valor+1 )
  }

  const Resultado = () => {
    //fazendo calculo para total
    var result = valor * 2

    //Salvar a funcao dentro de resultado
    setTotal( result )
  }

  useEffect(() =>{
    Resultado()
  },[ valor ])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{`Contador está em ${ valor }`}</Text>
      <Button
        onPress={ () => Evento() }
        title="Clique aqui"
      />
      <Text>{ `Resultado é: ${ total }`}</Text>
    </View>
  )
}

export default App