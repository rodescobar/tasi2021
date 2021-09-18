import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { View, Image, Text } from 'react-native'

//Telas do aplicativo
import Home from './src/Home'
import Detalhes from './src/Detalhes'
import Configuracoes from './src/Configuracoes'

const Stack = createNativeStackNavigator()

const AppBarTheme = {
  headerStyle: {
      backgroundColor: "rgb(0,71,49)",
  },
  headerTintColor: "#fff"
}

const PrincipalTheme = {
  headerTitle: (props) => <Logo />
}

const Logo = () => {
  return (
    <View>
      <Image 
        style={{ width: 50, height: 50 }}
        source={ require("./images/logo.png") }
      />
    </View>
  )
}
//source={{ uri("endereco/imagem.png") }}


const Rotas = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal" screenOptions={ AppBarTheme } >

        <Stack.Screen name="Detalhes" component={ Detalhes } />
        <Stack.Screen name="Principal" component={ Home } options= { PrincipalTheme }/>
        <Stack.Screen name="Configuracoes" component={ Configuracoes } options= { PrincipalTheme }/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Rotas