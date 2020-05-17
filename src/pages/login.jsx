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



const Login = (props) => {
  const [user, setUser] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [server, setServer] = React.useState(sessionStorage.getItem("server") || "http://localhost:1234")
  const errorsInitial = {
    user: false,
    password: false,
    server: false
  }

  const [errors, setErrors] = React.useState(errorsInitial)
  
  React.useEffect(() => {
    if(sessionStorage.getItem("user")) {
      props.f7router.navigate('/home')
    }
  }, []);


  const signIn = () => {

    const e = errorsInitial
    if(!user) e.user = true
    if(!password) e.password = true
    if(!server) e.server = true
    
    setErrors({...e})
    
    const hasErrors = Object.keys(e).find(key => e[key] === true)

    console.log(e, hasErrors)
    if(hasErrors) return

    helpers.setLoading(true)

    helpers.callApi(`healthcheck`, undefined, server)
      .then((response) => {
        helpers.callApi(`usuario/${user}/${password}`, undefined, server)
          .then((loginResponse) => {
            helpers.setLoading(false)

            if(!loginResponse) {
              f7.dialog.alert(`Usuário ou senha inválidos.`)
            } else {
              sessionStorage.setItem("user", JSON.stringify(loginResponse))
              props.f7router.navigate('/home')
            }
          })
      })
      .catch((error) => {
        console.log(error)
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
              onChange={(e) => setUser(e.target.value)}
              errorMessage={"Digite seu nome de usuário"}
              errorMessageForce={errors.user}
            />
            <ListInput
              label="Senha"
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              errorMessage={"Digite sua senha"}
              errorMessageForce={errors.password}
            />
            <Button onClick={() => signIn()} large fill>Login</Button>

          </List>

          <List>
            <ListInput
              label="endereço do servidor"
              type="text"
              value={server}
              onChange={(e) => setServer(e.target.value)}
              errorMessage={"Digite o endereço do servidor"}
              errorMessageForce={errors.server}
            />
          </List>          
        </Page>
  )
}


export default Login