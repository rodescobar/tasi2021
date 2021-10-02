import React from 'react'
import { View, Button, Text } from 'react-native'

const Configuracoes2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Configurações 2</Text>
      <Button title="Config 3" onPress={ () => navigation.navigate("Conf3")} />
    </View>
  )
}

export default Configuracoes2