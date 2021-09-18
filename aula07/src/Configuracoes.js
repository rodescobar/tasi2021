import React from 'react'

import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

const Conf = ({ navigation }) => {
  return (
    <View>
      <Text>Configuracoes</Text>
      <Button
        onPress={ () => console.log("oi") }
      >
        <Text>Configs</Text>
      </Button>      
    </View>
  )
}

export default Conf