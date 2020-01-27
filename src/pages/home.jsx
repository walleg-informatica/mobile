import React from 'react';
import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  List,
  ListItem
} from 'framework7-react';
import Card from '../components/card'
import '../css/app.scss'

export default () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar >
      <NavTitle sliding>Walleg Mobile</NavTitle>
    </Navbar>
    <List mediaList>
      <ListItem link="/checar-produto/" title="Produto" subtitle="Checar por código de barras">
        <img slot="media" src={`static/${"product-barcode.jpg"}`} width="48" />
      </ListItem>
      <ListItem link="/pedidos/" title="Lista de Pedidos" subtitle="Lista de Pedidos">
        <img slot="media" src={`static/${"order-check.jpg"}`} width="48" />
      </ListItem>
      <ListItem link="/entrada-nfe/" title="Entrada NF-e" subtitle="Entrada de NF-e">
        <img slot="media" src={`static/${"nfe.jpg"}`} width="48" />
      </ListItem>
      <ListItem link="/alterar-pedido/" title="Alterar Pedido" subtitle="Mudança de status">
        <img slot="media" src={`static/${"order-check.jpg"}`} width="48" />
      </ListItem>
      <ListItem link="/pagamentos/" title="Pagamentos" subtitle="Relatório de pagamentos">
        <img slot="media" src={`static/${"order-check.jpg"}`} width="48" />
      </ListItem>
      <ListItem link="/pedido/" title="Pedido" subtitle="Checar pedido">
        <img slot="media" src={`static/${"order-check.jpg"}`} width="48" />
      </ListItem>
    </List>
  </Page>
);