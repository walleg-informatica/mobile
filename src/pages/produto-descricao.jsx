import {
    Page,
    Navbar,
    Button,
    List,
    ListInput,
    ListItem
  } from 'framework7-react';
  import React from 'react';

import '../css/app.scss';
  
import helper from '../js/helpers';
  
  
  const ProdutoDescricao = () => {
    const [produtos, setProdutos] = React.useState([])
    const [description, setDescription] = React.useState("")
    const [hasSearch, setHasSearch] = React.useState(false)

    const loadProdutos = () => {

        helper.setLoading(true)
        helper.callApi(`produtos?descricao=${description}`)
            .then((result) => {
                helper.setLoading(false)
                setHasSearch(true)
                console.log("resultado", result)
                setProdutos(result)
            })
    }
    return (
      <Page name="form">
        <Navbar title="Produtos" backLink="Voltar"></Navbar>
        <List>
          <ListInput
            label="Descrição do produto"
            type="text"
            placeholder="digite"
            onChange={(e) => { setHasSearch(false); setDescription(e.target.value);  }}
          />
        </List>
        <Button onClick={() => loadProdutos()} large fill>Pesquisar</Button>
  
            {
                hasSearch && !produtos.length &&
                <p>Busca por "{description}" não trouxe nenhum resultado.</p>
            }
            {
                produtos.length &&
                <List simple-list className="zeebra">

                        {
                            produtos.map((p, i) => {
                                const estoque = parseFloat(p["Estoque_Anterior"] || 0) + parseFloat(p["Entradas"]) - parseFloat(p["Saídas"])
                                const estoqueText = (estoque || 0).toFixed(2)

                                return <ListItem key={i}>
                                    {p.estoque_codigo} - Estoque: {estoqueText} -  Valor: R$ {parseFloat(p["estoque_linha"]).toFixed(2)}
                                    <br/> {p["estoque_descrição"]}
                                </ListItem>
                            })
                        }
   
                </List>
            }
           

  
      </Page>
    );
  };
  
  
  export default ProdutoDescricao;
  