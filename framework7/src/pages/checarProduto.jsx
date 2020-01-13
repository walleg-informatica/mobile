import React from 'react'
import {
    Page,
    Navbar
} from 'framework7-react'

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

const ChecarProduto = () => {
    const [produto, setProduto] = React.useState({})
    
    React.useEffect(() => {
        scan(cordova)
            .then(({ code }) => load(code).then((produtos) => { 
                console.log("produtos", produtos)
                setProduto(produtos[0])
               }))   
    }, [])

    return (
        <Page name="form">
            <Navbar title="Produtos" backLink="Back" />
            <div>
                <p className="numeric-cell">{produto.estoque_codigo}</p>
                <p className="label-cell">{produto.estoque_descrição}</p>
                <p className="label-cell">{produto.estoque}</p>
                <p className="label-cell">{produto.estoque_codbarras}</p>
                <p className="label-cell">{produto.estoque_tabela}</p>
            </div>
        </Page>
    )
}

export default ChecarProduto

