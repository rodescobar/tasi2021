import React from 'react'
import { View, Button, Text } from 'react-native'

const Principal2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Principal 2</Text>
      <Button title="Principal 2" onPress={ () => navigation.navigate("Prin3")} />
      <Button title="Config 3" onPress={ () => navigation.navigate("Configuracoes")} />
    </View>
  )
}

export default Principal2