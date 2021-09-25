import React from 'react'

import { Image } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { FaBeer } from 'react-icons/fa'

import Home from './src/Home'
import Configuracoes from './src/Configuracoes'
import Historico from './src/Historico'

const Bottom = createBottomTabNavigator()

const BottomHome = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        <Bottom.Screen 
          name="Home"
          component={ Home }
          option={{
            tabBarLabel:"Home",
            tabBarIcon: <FaBeer />
          }}
        />
        <Bottom.Screen 
          name="Config"
          component={ Configuracoes }
          option={{
            tabBarLabel:"Settings",
            tabBarIcon: <Image />
          }}
        />
        <Bottom.Screen 
          name="Historico"
          component={ Historico }
          option={{
            tabBarLabel:"Historico",
            tabBarIcon: <MaterialCommunityIcons name="home" />
          }}
        />
      </Bottom.Navigator>
  )
}

export default BottomHome