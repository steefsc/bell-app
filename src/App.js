import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Content from './components/UI/Content/Content';
import Exchange from './containers/Exchange/Exchange';
import {Route,Switch} from 'react-router-dom';
class App extends Component {
  state = {
    authUser: null,
  }
  render() {
    return (
      <div>
        <Layout>
              <Content>
                  <Switch>
                      <Route path="/app/home" exact component={Exchange}></Route>
                      <Route path="/app/login" exact render={() => <h1>Login Page</h1>}></Route>
                  </Switch>
              </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
