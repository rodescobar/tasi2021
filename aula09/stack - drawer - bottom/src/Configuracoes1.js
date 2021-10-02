import React from 'react'
import { View, Button, Text } from 'react-native'

const Configuracoes1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Configurações 1</Text>
      <Button title="Config 2" onPress={ () => navigation.navigate("Conf2")} />
    </View>
  )
}

export default Configuracoes1