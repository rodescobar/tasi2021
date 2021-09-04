import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import axios from "axios"


export default App = () => {

  const [ minhaTabela, setTabela ] = useState( [] )
  const [ copiaTabela, setCopiaTabela ] = useState( [] )

  const [ textoFiltro, setTextoFiltro ] = useState("")

  const carregarPosts = async () => {
    var url = "https://jsonplaceholder.typicode.com/posts"

    await axios.get ( url )
            .then(ret => {
              setTabela( ret.data )
              setCopiaTabela( ret.data )
            })
  }


  const filtrar = ( event ) => {

    setTextoFiltro( event.target.value )

    var temp = minhaTabela.filter( item => {
      //console.log( item.title.indexOf(textoFiltro) > -1 )

      if ( item.title.indexOf(textoFiltro) > -1 )
        return item
      else {
        /*
        Pegando numero em qquer casa
        let idTexto = item.id.toString()

        if ( idTexto.indexOf(textoFiltro) > -1 ) 
          return item
        */

        if (item.id == textoFiltro)
          return item
      }
    })

    setCopiaTabela( temp )
  }

/*
Forma impar par
  //var num = 0 Forma 1

  var conteudoTabela = copiaTabela.map( (linha, indice) => {
      //num = num + 1 Forma 2
      
      var cor = "green"

      if ( indice % 2 == 1)
        cor = "yellow"

      return <tr style={{ backgroundColor: cor }}>
                <td><Text>{ linha.id }</Text></td>
                <td><Text>{ linha.userId }</Text></td>
                <td><Text>{ linha.title }</Text></td>
              </tr>

 
  })
*/

  var cor = "green"

  var conteudoTabela = copiaTabela.map( (linha, indice) => {
      if ( cor === "green" )
        cor = "yellow"
      else
        cor = "green"

      return <tr style={{ backgroundColor: cor }}>
                <td><Text>{ linha.id }</Text></td>
                <td><Text>{ linha.userId }</Text></td>
                <td><Text>{ linha.title }</Text></td>
              </tr>
  })


  return (

    <View style = {{ flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Pesquisar</Text>
      <TextInput 
        style={{ background: "#ccc" }}
        onChange={ ( e ) => filtrar(e)}
        value={ textoFiltro }
      />

        <table border ="1">
          <tr>
            <td><Text>Id</Text></td>
            <td><Text>UserId</Text></td>
            <td><Text>Title</Text></td>
          </tr>

          { conteudoTabela }
        </table>
        <Button
          title = "Carregar"
          onPress={() => carregarPosts() }
        /> 

    </View>

  )
}
