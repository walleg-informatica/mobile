import {
    Page,
    Navbar,
    List,
    ListItem,
    Button
  } from 'framework7-react';
  import React from 'react';
  import { f7 } from 'framework7-react';
  import helpers from '../js/helpers'

const adicionarItem = async(setItems, items) => {
    let barcode = '9788542212341'
    if(window.cordova) {
        const scanReturn = await helpers.scan(cordova)
        //barcode = scanReturn.code
    }
    
    helpers.setLoading(true)
    const produto = await helpers.callApi(`produto?codigoDeBarras=${barcode}`)
    helpers.setLoading(false)
    
    var dialog = f7.dialog.create({
        text: 'Quantidade',
        content: '<div class="dialog-input-field item-input"><div class="item-input-wrap"><input class="dialog-input" type="number" placeholder="Insira um número" required></div></div>',
        buttons: [{text: 'Ok'}],
        onClick: function (dialog, index) {
            const quantidade = dialog.$el.find('.dialog-input').val()
            setItems([...items, { produto, quantidade }])
        },
        on: {
            open: function () {
               
            }
        }
    }).open();
}



const loadPedido = async() => {
    let barcode = '5502'
    if(window.cordova) {
        const scanReturn = await helpers.scan(cordova)
        //barcode = scanReturn.code
    }

    helpers.setLoading(true)
    const pedido = await helpers.callApi(`pedido/${barcode}`)
    helpers.setLoading(false)
    return pedido
}

const validar = (pedido, items) => {
    for(let i = 0; i < items.length; i++){
        const { produto, quantidade } = items[i]
        const item = pedido.produtos.find((x) => x.id == produto.id)
        if(!item) {
            f7.dialog.alert(`produto não consta na nota: ${produto.descricao}`)
            return
        }

        if(parseInt(item.quantidade) != parseInt(quantidade)){
            f7.dialog.alert(`Quantidade (${quantidade}) Inválida para o Produto: ${produto.descricao}`)
            return
        }
    }

    f7.dialog.alert('NFE válida.')
}

const EntradaNfe = () => {
    const [items, setItems] = React.useState([])
    const [pedido, setPedido] = React.useState({})
    React.useEffect(() => {
        loadPedido()
          .then((p) => setPedido(p))
      }, [])

    return(
        <Page name="form">
            <Navbar title="Entrada Nfe" backLink="Voltar" />
            <List>
                <ListItem header={`pedido ${pedido.id}`} title={`Valor: R$ ${pedido.valor}`}></ListItem>
            </List>
            <List simple-list>
                <ListItem title={`${items.reduce((total, item) => total + parseInt(item.quantidade), 0)} itens`}></ListItem>   
            </List>
            <Button large fill onClick={() => adicionarItem(setItems, items)}>Entrada de Item</Button>
            <br></br>
            <Button large fill color="green" onClick={() => validar(pedido, items)}>Validar</Button>
        </Page>
    )
}

export default EntradaNfe