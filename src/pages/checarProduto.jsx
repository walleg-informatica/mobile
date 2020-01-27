import React from 'react'
import {
    Page,
    Navbar,
    List,
    ListItem
} from 'framework7-react'
import { f7 } from 'framework7-react';

const load = (code) => {
    const url = `https://8biizghzr4.execute-api.us-west-2.amazonaws.com/production/produto/${code}`
    return fetch(url, {mode: 'cors'})
      .then((result) => result.json())
  }

const scan = (cordova) => new Promise((resolve, reject) => {
cordova.plugins.barcodeScanner.scan(
    function (result) {
        resolve({
        code: result.text
        })
    },
    function (error) {
        reject(error)
    },
    {
        preferFrontCamera : false, // iOS and Android
        showFlipCameraButton : true, // iOS and Android
        showTorchButton : true, // iOS and Android
        torchOn: false, // Android, launch with the torch switched on (if available)
        saveHistory: true, // Android, save scan history (default false)
        prompt : "Escaneie o produto", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats : "UPC_A, EAN_13, CODE_39, CODE_128", // default: all but PDF_417 and RSS_EXPANDED
        orientation : undefined, // Android only (portrait|landscape), default unset so it rotates with the device
        disableAnimations : true, // iOS
        disableSuccessBeep: false // iOS and Android
    }
)
})

const setLoading = (isLoading) => {
    isLoading ? f7.dialog.preloader('Carregando...') : f7.dialog.close()
}

const loadProduto = async(setProduto) => {
    setLoading(true)
    let barcode = '9788542212341'
        if (window.cordova) {
            const scanReturn = await scan(cordova)
            barcode = scanReturn.code
        }
        const produtos = await load(barcode)
        setProduto(produtos[0])
        setLoading(false)
}

const ChecarProduto = () => {
    const [produto, setProduto] = React.useState({})
    
    React.useEffect(() => { loadProduto(setProduto) }, [])

    return (
        <Page name="form">
            <Navbar title="Produtos" backLink="Back" />
            <List simple-list>
                <ListItem>{produto.estoque_codigo}</ListItem>
                <ListItem>{produto.estoque_descrição}</ListItem>
                <ListItem>{produto.estoque}</ListItem>
                <ListItem>{produto.estoque_codbarras}</ListItem>
                <ListItem>{produto.estoque_tabela}</ListItem>
            </List>
        </Page>
    )
}

export default ChecarProduto

