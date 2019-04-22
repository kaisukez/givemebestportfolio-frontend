import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import MainSection from './components/MainSection'
import OptionSection from './components/OptionSection'

library.add(faTimes)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/option' component={OptionSection} />
          <Route path='/' component={MainSection} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
