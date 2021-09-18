import React from 'react'

import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

const Home = ({ navigation }) => {
  return (
    <View style={{ flex:1, justifyContent: "center", alignItems: "center"}}>
      <Text>Principal</Text>
      <Button
        onPress={ () => navigation.navigate("Detalhes") }
      >
        Teste
      </Button>
    </View>
  )
}

export default Home