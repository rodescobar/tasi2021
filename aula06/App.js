import React from 'react'
import { SafeAreaView } from 'react-native'

import { DefaultTheme, Provider as ThemeProvider } from "react-native-paper"

import Principal from './Paper'

const estilo = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(0,0,0,0.6)',
    accent: '#f1c40f',
    text: "tomato"
  },
};


const App = () => {

  return (
    <ThemeProvider theme={ estilo } >
      <SafeAreaView>
        <Principal />
      </SafeAreaView>
    </ThemeProvider>
  )

}

export default App