import React from 'react'
import {
    Page,
    Navbar,
    List,
    ListItem
} from 'framework7-react'
import { f7 } from 'framework7-react';
import helpers from '../js/helpers'

const setLoading = (isLoading) => {
    isLoading ? f7.dialog.preloader('Carregando...') : f7.dialog.close()
}

const loadPedido = async(setPedido) => {
    setLoading(true)
    let barcode = '5502'
        if (window.cordova) {
            const scanReturn = await scan(cordova)
            barcode = scanReturn.code
        }
        const pedido = await helpers.callApi(`/pedido/${barcode}`)
        setPedido(pedido)
        setLoading(false)
}

const ChecarPedido = () => {
    const [pedido, setPedido] = React.useState({})

    React.useEffect(() => { loadPedido(setPedido) }, [])

    return (
        <Page name="form">
            <Navbar title="Pedido" backLink="Back" />
            <List simple-list>
                <ListItem>Id: {pedido.id}</ListItem>
                <ListItem>Quantidade: {pedido.quantidade}</ListItem>
                <ListItem>Valor: {pedido.valor}</ListItem>
                <ListItem>Data: {pedido.data}</ListItem>
                <ListItem>Status: {pedido.status}</ListItem>
                <ListItem>Observação: {pedido.observacao}</ListItem>
            </List>
        </Page>
    )
}

export default ChecarPedido

