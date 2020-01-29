import React from 'react'
import Loading from '../components/loading'
import {
  Page,
  Navbar,
  List,
  ListItem,
  Button
} from 'framework7-react'
import { f7 } from 'framework7-react';
import helpers from '../js/helpers'

const loadPedido = async() => {
  let barcode = '5502'
  if(window.cordova) {
    const scanReturn = await helpers.scan(cordova)
    //barcode = scanReturn.code
  }

  setLoading(true)
  const pedido = await helpers.callApi(`pedido/${barcode}`)
  setLoading(false)
  return pedido
}

const loadStatus = () =>
  fetch('https://8biizghzr4.execute-api.us-west-2.amazonaws.com/production/statusPedido')
    .then((res => res.json()))

const alterarPedido = async(pedidoId, status) => {
  setLoading(true)
  const result = await helpers.callApi(`pedido/alterar-status/${pedidoId}`, {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: pedidoId, status })
  })
  
  setLoading(false)

  const toastBottom = f7.toast.create({
    text: 'Pedido alterado com sucesso',
    closeTimeout: 2000,
  });

  toastBottom.open()
}

const setLoading = (isLoading) => 
   isLoading
   ? f7.dialog.preloader('Carregando...')
   : f7.dialog.close()

const AlterarPedido = () => {
  const [ status, setStatus ] = React.useState([]) 
  const [ pedido, setPedido] = React.useState({id: 0, statusPedido: "Carregando...", valor: 0}) 
  const [ selectedStatus, setSelectedStatus] = React.useState(undefined)

  React.useEffect(() => {
    setLoading(true)
    loadPedido()
      .then((res) => setPedido(res))
      .then(() => loadStatus())
      .then((res) => setStatus(res))
      .then(() => setLoading(false))
  }, [])

  return(
    <Page name="form">
      <Navbar title="Alterar Pedidos" backLink="Voltar" />
      <List>
        <ListItem header={`pedido ${pedido.id}`} title={`Valor: R$ ${pedido.valor}`}></ListItem>
      </List>
      <List>
        {
          status.map((({ id, status}) =>
            <ListItem onChange={(e) => setSelectedStatus(e.target.value)} radio value={id} name="status-radio" defaultChecked={status === pedido.statusPedido} title={status} key={id} />
          ))
        }
      </List>
      <Button onClick={() => alterarPedido(pedido.id, selectedStatus)} large fill>Alterar</Button>
    </Page>
  )
}

export default AlterarPedido