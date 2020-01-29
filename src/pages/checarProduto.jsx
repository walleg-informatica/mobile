import React from 'react'
import {
    Page,
    Navbar,
    List,
    ListItem
} from 'framework7-react'
import { f7 } from 'framework7-react';
import helpers from '../js/helpers'

const load = (code) => {
const url = `https://8biizghzr4.execute-api.us-west-2.amazonaws.com/production/produto?codigoDeBarras=${code}`
return fetch(url, {mode: 'cors'})
    .then((result) => result.json())
}

const setLoading = (isLoading) => {
    isLoading ? f7.dialog.preloader('Carregando...') : f7.dialog.close()
}

const loadProduto = async(setProduto) => {
    let barcode = '9788542212341'
    if (window.cordova) {
        const scanReturn = await helpers.scan(cordova)
        //barcode = scanReturn.code
    }
    setLoading(true)
    const produto = await load(barcode)
    setProduto(produto)
    setLoading(false)
}

const ChecarProduto = () => {
    const [produto, setProduto] = React.useState({})
    
    React.useEffect(() => { loadProduto(setProduto) }, [])

    return (
        <Page name="form">
            <Navbar title="Produtos" backLink="Voltar" />
            <List>
                <ListItem header="código" title={produto.id}></ListItem>
                <ListItem header="descrição" title={produto.descricao}></ListItem>
                <ListItem header="estoque" title={produto.estoque}></ListItem>
                <ListItem header="código de barras" title={produto.codigoDeBarras}></ListItem>
                <ListItem header="tabela" title={produto.tabela}></ListItem>
            </List>
        </Page>
    )
}

export default ChecarProduto

