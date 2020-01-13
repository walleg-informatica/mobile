import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block
} from 'framework7-react';

export default () => (
  <Page name="form">
    <Navbar title="Configurações de Usuário" backLink="Back"></Navbar>

    <BlockTitle>Informações Pessoais</BlockTitle>
    <List noHairlinesMd>
      <ListInput
        label="Nome completo"
        type="text"
        placeholder="Seu nome completo"
      ></ListInput>

      <ListInput
        label="E-mail"
        type="email"
        placeholder="E-mail"
      ></ListInput>

      <ListInput
        label="Site"
        type="url"
        placeholder="URL"
      ></ListInput>

      <ListInput
        label="Senha"
        type="password"
        placeholder="Senha"
      ></ListInput>

      <ListInput
        label="Telefone"
        type="tel"
        placeholder="Telefone"
      ></ListInput>

      <ListInput
        label="Gênero"
        type="select"
        >
        <option>Masculino</option>
        <option>Feminino</option>
        <option>Outro</option>
      </ListInput>

      <ListInput
        label="Data de Nascimento"
        type="date"
        placeholder="Data de Nascimento"
        defaultValue="2014-04-30"
      ></ListInput>

      <ListItem
        title="Deseja receber notificações?"
        >
        <Toggle slot="after" />
      </ListItem>

      <ListInput
        type="textarea"
        label="Informações adicionais"
      ></ListInput>
    </List>

    <Block strong>
      <Row tag="p">
        <Button className="col" large fill raised color="red">Cancelar alterações</Button>
        <Button className="col" large fill raised color="green">Confirmar</Button>
      </Row>
    </Block>
  </Page>
);