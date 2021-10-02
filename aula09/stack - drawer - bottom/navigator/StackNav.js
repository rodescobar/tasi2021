import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DrawerNav from './DrawerNav'

import Config2 from '../src/Configuracoes2'
import Config3 from '../src/Configuracoes3'

const Stack = createNativeStackNavigator()

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Principal"
        component={ DrawerNav}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Conf2" component={ Config2 } />
      <Stack.Screen name="Conf3" component={ Config3 } />
    </Stack.Navigator>
  )
}

export default StackNav