import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'

import Home from './src/Home'
import Detalhes from './src/Detalhes'

import BottomHome from './bottomHome'


const Stack = createStackNavigator()


const Routes = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Principal" component={ BottomHome } options={{ title: "WhatsApp" }}/>
        <Stack.Screen name="Detalhes" component={ Detalhes } />
      </Stack.Navigator>

      
    </NavigationContainer>
  )
}

export default Routes