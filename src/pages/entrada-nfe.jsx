import {
    Page,
    Navbar,
    List,
    ListItem,
    Button
  } from 'framework7-react';
  import React from 'react';
  import { f7 } from 'framework7-react';

const validar = () => {
    f7.dialog.alert('NFE válida.')
}

const adicionarItem = (setItems, items) => {
    var dialog = f7.dialog.create({
        text: 'Quantidade',
        content: '<div class="dialog-input-field item-input"><div class="item-input-wrap"><input class="dialog-input" type="number" placeholder="Insira um número" required></div></div>',
        buttons: [{text: 'Ok'}],
        onClick: function (dialog, index) {
            const quantidade = dialog.$el.find('.dialog-input').val()
            setItems([...items, { quantidade }])
        },
        on: {
            open: function () {
                console.log("OPEN");
            }
        }
    }).open();
}

const EntradaNfe = () => {
    const [items, setItems] = React.useState([])

    return(
        <Page name="form">
            <Navbar title="Entrada Nfe" backLink="Voltar" />
            <List simple-list>
                <ListItem title="pedido 893595"></ListItem>   
            </List>
            <List simple-list>
                <ListItem title={`${items.reduce((total, item) => total + parseInt(item.quantidade), 0)} itens`}></ListItem>   
            </List>
            <Button large fill onClick={() => adicionarItem(setItems, items)}>Entrada de Item</Button>
            <br></br>
            <Button large fill color="green" onClick={() => validar()}>Validar</Button>
        </Page>
    )
}

export default EntradaNfe