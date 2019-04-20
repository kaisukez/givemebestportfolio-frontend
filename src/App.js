import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainSection from './components/MainSection'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path='/options' component={LoginWithGoogle} /> */}
          <Route path='/' component={MainSection} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
