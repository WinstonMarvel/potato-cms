import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './../Login';
import Dashboard from './../Dashboard';

import './App.scss';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
     
    }
  }
  
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/admin' component={Dashboard}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
