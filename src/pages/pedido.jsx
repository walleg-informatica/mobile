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
    
    let barcode = '5502'
    if (window.cordova) {
        const scanReturn = await helpers.scan(cordova)
        //barcode = scanReturn.code
    }
    setLoading(true)
    const pedido = await helpers.callApi(`/pedido/${barcode}`)
    setPedido(pedido)
    setLoading(false)
}

const ChecarPedido = () => {
    const [pedido, setPedido] = React.useState({})

    React.useEffect(() => { loadPedido(setPedido) }, [])

    return (
        <Page name="form">
            <Navbar title="Pedido" backLink="Voltar" />
            <List>
                <ListItem header="código" title={pedido.id}></ListItem>
                <ListItem header="quantidade" title={pedido.quantidade}></ListItem>
                <ListItem header="valor" title={pedido.valor}></ListItem>
                <ListItem header="data" title={pedido.data}></ListItem>
                <ListItem header="status" title={pedido.statusPedido}></ListItem>
                <ListItem header="observação" title={pedido.observacao}></ListItem>
            </List>
        </Page>
    )
}

export default ChecarPedido

