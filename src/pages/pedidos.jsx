
import {
  Page,
  Navbar,
  BlockTitle
} from 'framework7-react';
import React from 'react';
//import './Pedidos.css';
import helpers from '../js/helpers'

const load = () => {
  const url = 'https://8biizghzr4.execute-api.us-west-2.amazonaws.com/production/pedido'
  return fetch(url, {mode: 'cors'})
    .then((result) => result.json())
}

const Pedidos = () => {
  const [pedidos, setPedidos] = React.useState([])

  React.useEffect(() => {
    helpers.setLoading(true)
    load().then((pedidos) => { 
      helpers.setLoading(false)
      setPedidos(pedidos)
    })
  }, [])

  return (
    <Page name="form">
      <Navbar title="Lista de Pedidos" backLink="Voltar" />
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th className="label-cell">ID</th>
              <th className="numeric-cell">Valor do Produto</th>
              <td className="label-cell">Status</td>
            </tr>
          </thead>
          <tbody>
            {
              pedidos.map((pedido) => (
                <tr key={pedido.id}>
                  <td className="label-cell">{pedido.id}</td>
                  <td className="numeric-cell">{pedido.valor}</td>
                  <td className="label-cell">EM ABERTO</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </Page>
  );
};

/* Changes color of status chip according to status
  <div className={"card__content__status chip color-" + (status === 'EM ABERTO' ? 'green' : 'red')}>
    <div class="chip-label">{status}</div>
  </div>
*/
export default Pedidos;
