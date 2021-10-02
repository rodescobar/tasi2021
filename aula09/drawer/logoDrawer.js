import React from 'react'
import { View, Image, SafeAreaView } from 'react-native'
import { Title, Text } from 'react-native-paper'

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerList
} from '@react-navigation/drawer'

const LogoDrawer = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image 
        source={{
          uri: "https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/09/26/150926165742__85730600_monkey2.jpg"
        }} 
        style={{ width: 100, height: 100, borderRadius: 100 }}  
      />
      <Title>Meu Drawer</Title>
    </View>
  )
}


const Rodape = () => {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
      <Text>@2021 ITE</Text>
    </View>
  )
}


const Drawer = ( props ) => {
  return (
    <SafeAreaView style={{ flex:1 }} >
      <LogoDrawer />
      <DrawerContentScrollView { ...props }>
        <DrawerItemList { ...props }/>
      </DrawerContentScrollView>
      <Rodape />
    </SafeAreaView>
  )
}

export default Drawer