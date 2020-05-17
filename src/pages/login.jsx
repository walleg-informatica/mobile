import React from 'react'
import {
    Page,
    Navbar,
    List,
    ListItem,
    ListInput,
    LoginScreen,
    Block,
    Button,
    BlockFooter,
    ListButton
} from 'framework7-react'
import helpers from '../js/helpers'
import { f7 } from 'framework7-react';



const Login = () => {
  const [user, setUser] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [server, setServer] = React.useState("http://localhost:1234")
  const [serverErrorMessage, setServerErrorMessage] = React.useState(undefined)

  
  const signIn = (user, password, server) => {
    helpers.setLoading(true)

    helpers.callApi(`healthcheck`, undefined, server)
      .then((response) => {
        helpers.callApi(`login/${user}/${password}`, undefined, server)
          .then((loginResponse) => {
            console.log('logou')
          })
      })
      .catch((error) => {
        helpers.setLoading(false)
        f7.dialog.alert(`Não foi possivel encontrar o servidor Walleg executando em: <br><br> ${server} <br><br> Contate o administrador do sistema.`)
      })
  }

  return (
        <Page>
          <Navbar title="Login"></Navbar>
          <Block>
            <p>Bem vindo</p>
          </Block>
          <List>
            <ListInput
              label="usuário"
              type="text"
              placeholder="Usuário"
              onChange={setUser}
            />
            <ListInput
              label="Senha"
              type="password"
              placeholder="Senha"
              onChange={setPassword}
            />
            <Button onClick={() => signIn(user, password, server)} large fill>Login</Button>

          </List>

          <List>
            <ListInput
              label="endereço do servidor"
              type="text"
              value={server}
              onChange={setServer}
            />
          </List>          
        </Page>
  )
}


export default Login