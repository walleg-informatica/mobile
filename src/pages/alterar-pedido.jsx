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

const loadPedido = () => {
  const url = 'https://8biizghzr4.execute-api.us-west-2.amazonaws.com/production/pedido/5502'
  return fetch(url, {mode: 'cors'})
    .then((result) => result.json())
}

const loadStatus = () =>
  fetch('https://8biizghzr4.execute-api.us-west-2.amazonaws.com/production/statusPedido')
    .then((res => res.json()))

const alterarPedido = (pedidoId, status) => {
  setLoading(true)
  fetch(`https://8biizghzr4.execute-api.us-west-2.amazonaws.com/production/pedido/alterar-status/${pedidoId}`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: pedidoId, status })
  }).then((res) => {
    console.log(res)
    setLoading(false)

    var toastBottom = f7.toast.create({
      text: 'Pedido alterado com sucesso',
      closeTimeout: 2000,
    });

    toastBottom.open()
  })
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
      <List simple-list>
        <ListItem title={pedido.id}> {pedido.statusPedido} - {pedido.valor}</ListItem>
      </List>
      <List>
        {
          status.map((({ id, status}) =>
            <ListItem onChange={(e) => setSelectedStatus(e.target.value)} radio value={status} name="status-radio" defaultChecked={status === pedido.statusPedido} title={status} key={id} />
          ))
        }
      </List>
      <Button onClick={() => alterarPedido(pedido.id, selectedStatus)} large fill>Alterar</Button>
    </Page>
  )
}

export default AlterarPedido