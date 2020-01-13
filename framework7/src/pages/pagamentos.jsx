import {
  Page,
  Navbar,
  Button
} from 'framework7-react';
import React from 'react';
//import './Pagamentos.css';

const Pagamentos = () => {
  return (
    <Page name="form">
      <Navbar title="Form" backLink="Back"></Navbar>

      <div className="pagamento">
        <div className="pagamento__item">
          <div className="pagamento__item__title">Início</div>
          <div className="pagamento__item__input">
            <input type="date"></input>
          </div>
        </div>
        <div className="pagamento__item">
          <div className="pagamento__item__title">Fim</div>
          <div className="pagamento__item__input">
            <input type="date"></input>
          </div>
        </div>
        <Button className="col" outline>Outline</Button>
      </div>
    </Page>
  );
};


export default ListPage;
