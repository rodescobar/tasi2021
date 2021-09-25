import React from 'react'
import { View, Text, Button } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{ `Você está na Home`} </Text>
      <Button
        onPress={ () => navigation.push("Detalhes") }
        title="Detalhes"
      />
    </View>
  )
}


export default Home