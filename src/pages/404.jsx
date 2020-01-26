import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Não Encontrado" backLink="Back" />
    <Block strong>
      <p>Desculpe</p>
      <p>Este conteúdo não foi encontrado</p>
    </Block>
  </Page>
);
