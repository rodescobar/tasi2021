import React from 'react'

import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

const Detalhes = ({ navigation }) => {
  return (
    <View>
      <Text>Detalhes</Text>
      <Button
        onPress={ () => navigation.navigate("Detalhes") }
      >
        <Text>Ir novamente</Text>
      </Button>
       
      <Button
        onPress={ () => navigation.push("Configuracoes") }
      >
        <Text>Configs</Text>
      </Button>      
    </View>
  )
}

export default Detalhes