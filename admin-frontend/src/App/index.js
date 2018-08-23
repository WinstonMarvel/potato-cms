import React, { Component } from 'react';
import {Container, Row, Col, Dropdown, DropdownToggle, DropdownItem, DropdownMenu} from 'reactstrap';
import Login from './../Login';
import Dashboard from './../Dashboard';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
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
          <Route exact path='/dashboard' component={Dashboard}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
