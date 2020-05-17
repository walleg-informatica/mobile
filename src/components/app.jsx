import React from 'react';
import {
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';

import cordovaApp from '../js/cordova-app';
import routes from '../js/routes';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      // Framework7 Parameters
      f7params: {
        id: 'br.com.walleg', // App bundle ID
        name: 'Walleg', // App name
        theme: 'auto', // Automatic theme detection
        routes: routes, // App routes
        // Input settings
        input: {
          scrollIntoViewOnFocus: this.$device.cordova && !this.$device.electron,
          scrollIntoViewCentered: this.$device.cordova && !this.$device.electron,
        },
        // Cordova Statusbar settings
        statusbar: {
          iosOverlaysWebView: true,
          androidOverlaysWebView: false,
        }
      },
      // Login screen demo data
      username: '',
      password: '',
      
    }
  }
  logout(){
    sessionStorage.removeItem("user")
    
    window.location = "/"
  }
  render() {
    return (
      <App params={ this.state.f7params } >
        {/* Right panel with reveal effect*/}
        <Panel right themeDark>
          <View>
              <Page>
                <Navbar title="Menu"/>
                <List>
                  <ListItem onClick={() => this.logout()} view=".view-main" panel-close title="Sair"/>
                </List>
              </Page>
            </View>
        </Panel>
        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url="/" />
      </App>
    )
  } 
  alertLoginData() {
    this.$f7.dialog.alert('Username: ' + this.state.username + '<br>Password: ' + this.state.password);
  }
  componentDidMount() {
    this.$f7ready((f7) => {
      // Init cordova APIs (see cordova-app.js)
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
    });
  }
}