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

export default () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar sliding={false} large>
      <NavTitle sliding>walleg</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
      <NavTitleLarge>walleg</NavTitleLarge>
    </Navbar>
    <Card title="Checar Produto" description="ole" picture="product-barcode.jpg" />
    <Card title="Checar Pedido" description="ole" picture="order-check.jpg" />
    <Card title="Entrada NF-e" description="ole" picture="nfe.jpg" />
   

  </Page>
);