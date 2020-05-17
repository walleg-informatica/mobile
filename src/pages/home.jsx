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
    
    <Navbar >
      <NavTitle sliding>
        <img slot="media" src={`static/${"logo.png"}`} width="128" />
      </NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
    </Navbar>
    <List mediaList>
      {/*
        <ListItem link="/checar-produto/" title="Produto" subtitle="Checar por código de barras">
          <img slot="media" src={`static/${"product-barcode.jpg"}`} width="48" />
        </ListItem>
       
        <ListItem link="/pedido/" title="Pedido" subtitle="Checar por código de barras">
          <img slot="media" src={`static/${"order-check.jpg"}`} width="48" />
        </ListItem>
        <ListItem link="/entrada-nfe/" title="Entrada NF-e" subtitle="Conferir produtos">
          <img slot="media" src={`static/${"nfe.jpg"}`} width="48" />
        </ListItem>
        <ListItem link="/alterar-pedido/" title="Alterar Pedido" subtitle="Mudança de status">
          <img slot="media" src={`static/${"update.jpg"}`} width="48" />
        </ListItem>
        <ListItem link="/pagamentos/" title="Pagamentos" subtitle="Relatório de pagamentos">
          <img slot="media" src={`static/${"payments.jpeg"}`} width="48" />
        </ListItem>
        <ListItem link="/pedidos/" title="Lista de Pedidos" subtitle="">
          <img slot="media" src={`static/${"order-check.jpg"}`} width="48" />
        </ListItem>
      */
      }

        <ListItem link="/produto-descricao/" title="Produto" subtitle="Checar por descrição">
          <img slot="media" src={`static/${"product-barcode.jpg"}`} width="48" />
        </ListItem>
      
    </List>
  </Page>
);