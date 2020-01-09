
import {
  Page,
  Navbar,
  BlockTitle
} from 'framework7-react';
import React from 'react';
//import './Pedidos.css';

const load = () => {
  const url = 'https://8biizghzr4.execute-api.us-west-2.amazonaws.com/production/pedido'
  return fetch(url)
    .then((result) => result.json())
}

const Pedidos = () => {
  const [pedidos, setPedidos] = React.useState([])
  console.log(pedidos)
  load().then((pedidos) => { 
    console.log("pee", pedidos)
    setPedidos(pedidos)
   })
 
  return (
    <Page name="form">
      <Navbar title="Pedidos" backLink="Back" />
      <table>
        <thead>
          <tr>
            <th className="label-cell">id</th>
            <th className="numeric-cell">valor</th>
          </tr>
        </thead>
        <tbody>
          {
            pedidos.map((pedido) => (
              <tr>
                <td className="label-cell">{pedido.id}</td>
                <td className="numeric-cell">{pedido.valor}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Page>
  );
};


export default Pedidos;
