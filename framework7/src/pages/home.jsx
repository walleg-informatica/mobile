import React from 'react';
import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link
} from 'framework7-react';
import Card from '../components/card'
import '../css/app.scss'

export default () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar sliding={true} large>
      <NavTitle sliding>Walleg Mobile</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
      <NavTitleLarge id="nav__title--large">Walleg Mobile</NavTitleLarge>
    </Navbar>
    <Card title="Checar Produto" description="Ver produtos" picture="product-barcode.jpg" route="/checar-produto/"/>
    <Card title="Checar Pedido" description="Ver pedidos" picture="order-check.jpg" route="/pedidos/"/>
    <Card title="Entrada NF-e" description="Ver Entradas NF-e" picture="nfe.jpg" route="/entrada/"/>
  </Page>
);