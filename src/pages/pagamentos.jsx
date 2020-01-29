import {
  Page,
  Navbar,
  Button,
  List,
  ListInput,
  ListItem
} from 'framework7-react';
import React from 'react';
//import './Pagamentos.css';
import helpers from '../js/helpers'


const loadPagamentos = ({ initial, final }, setPagamentos) => {
  const initialDate = helpers.formatDate(initial)
  const finalDate = helpers.formatDate(final)

  helpers.setLoading(true)

  helpers.callApi(`pagamentos/${initialDate}/${finalDate}`)
    .then((pagamentos) => {
      helpers.setLoading(false)
      console.log(pagamentos)
      setPagamentos(pagamentos)
    })
}

const Pagamentos = () => {
  const [pagamentos, setPagamentos] = React.useState([])
  const [date, setDate] = React.useState({ initial: undefined, final: undefined})

  return (
    <Page name="form">
      <Navbar title="Pagamentos" backLink="Voltar"></Navbar>
      <List>
        <ListInput
          label="Data inicial"
          type="datepicker"
          placeholder="Data inicial"
          calendarParams={{dateFormat: 'dd/mm/yyyy', locale: 'pt-BR',closeOnSelect: true, footer: false, toolbarCloseText:'Fechar'}}
          defaultValue="2020-01-01"
          onCalendarChange={([d]) => setDate({ initial: d, final: date.final })}
        />
        <ListInput
          label="Data final"
          type="datepicker"
          placeholder="Data final"
          calendarParams={{dateFormat: 'dd/mm/yyyy', locale: 'pt-BR',closeOnSelect: true, footer: false, toolbarCloseText:'Fechar'  }}
          onCalendarChange={([d]) => setDate({ initial: date.initial, final: d })}
        />
      </List>
      <Button onClick={() => loadPagamentos(date, setPagamentos)} large fill>Pesquisar</Button>


        <List simple-list>
          {
            pagamentos.map((p, i) => <ListItem key={i}>Documento: {p.documento} <br/> Fornecedor {p.fornecedor} <br/> Vencimento: {p.vencimento} <br/> Valor: R$ {p.valor}</ListItem>)
          }
          
        </List>

    </Page>
  );
};


export default Pagamentos;
