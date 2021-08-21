import React, { useState } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

//import { StatusBar } from 'expo-status-bar';

const App = () => {

  //variavel de estado
  const [ numero, setNumero ] = useState( 0 )

  //variavel comum
  var contadora = 0

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 48  }}> 
        Contador
      </Text>
      <Text style={{ fontSize: 32  }}>
        { numero }
      </Text>
      <TouchableHighlight
        onPress={ () =>  { 
          setNumero(numero + 1) 
          contadora++
          console.log( contadora )
        }
      }
      >
        <Text>Clique aqui</Text>
      </TouchableHighlight>

      <Text style={{ fontSize: 32, color: "red"  }}>
        { contadora }
      </Text>      
    </View>
  )
}

export default App