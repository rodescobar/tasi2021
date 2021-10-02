import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

import BottomNav from './BottomNav'
import Config1 from '../src/Configuracoes1'

export default DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Principal' component={ BottomNav } />
      <Drawer.Screen name='Configuracoes' component={ Config1 } />
    </Drawer.Navigator>
  )
}