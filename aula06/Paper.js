import React, { useState } from 'react'

import { Button, TextInput, Appbar, Text, Portal, Modal, Card, Title } from 'react-native-paper'

import { View, ScrollView } from 'react-native'

const Principal = () => {

    const [texto, setTexto] = useState("")

    const [visivel, setVisivel] = useState(false)


    const Abrir = () => {
        setVisivel(true)
    }

    const Fechar = () => {
        setVisivel(false)
    }

    return (
        <ScrollView>
            <Appbar>
                <Appbar.Content title="ITE" />
            </Appbar>
            <View>
                <Portal>
                    <Modal visible={visivel} onDismiss={Fechar} >
                        <Text>Chegou no modal</Text>
                    </Modal>
                </Portal>


                <Button
                    mode="contained"
                    onPress={() => { Abrir() }}
                >
                    BUSCAR
                </Button>
                <Card style={{ marginTop: 10 }}
                    mode="outlined"
                >
                    <Card.Title title="Meu card" />
                    <Card.Content>
                        <Text>Título do card</Text>
                    </Card.Content>
                    <Card.Cover source={{ uri: "https://via.placeholder.com/600/92c952" }} />
                </Card>

                <Card style={{ marginTop: 10 }}
                    mode="outlined"
                >
                    <Card.Title title="Meu card" />
                    <Card.Content>
                        <Text>Título do card</Text>
                    </Card.Content>
                    <Card.Cover source={{ uri: "https://picsum.photos/300" }} />
                </Card>

                <Card style={{ marginTop: 10 }}
                    mode="outlined"
                >
                    <Card.Title title="Meu card" />
                    <Card.Content>
                        <Text>Título do card</Text>
                    </Card.Content>
                    <Card.Cover source={{ uri: "https://picsum.photos/400" }} />
                </Card>

            </View>
        </ScrollView>
    )
}

export default Principal










