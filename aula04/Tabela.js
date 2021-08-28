import React from 'react'
import { View, Text, Button } from 'react-native'

const Tabela = ( { colunas, linhas, aoClicar } ) => {
  
  const tabelaColuna = colunas.map( lin => {
    return (
      <td>{ lin }</td>
    )
  })

  const linhasTabela = linhas.map( lin => {
    return (
      <tr>
        <td>{ lin.nome }</td>
        <td>{ lin.telefone } </td>
        <td>{ lin.ativo }</td>
        <td>
          <Button title="Clique" onPress={ () => aoClicar( lin.nome ) } />
        </td>
      </tr>
    )
  })

  return (
    <View>

      <table border="1">
        <tr>
          { tabelaColuna }
        </tr>

        { linhasTabela }
      </table>
    </View>
  )
}

export default Tabela