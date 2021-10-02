import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Principal1 from '../src/Principal1'
import Principal2 from '../src/Principal2'
import Principal3 from '../src/Principal3'

const Bottom = createBottomTabNavigator()

const BottomNav = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Bottom.Screen name="Prin1" component={ Principal1 } />
      <Bottom.Screen name="Prin2" component={ Principal2 } />
      <Bottom.Screen name="Prin3" component={ Principal3 } />
    </Bottom.Navigator>
  )

}

export default BottomNav