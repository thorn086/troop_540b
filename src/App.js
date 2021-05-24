import React, { Component } from "react";
import { Route } from 'react-router-dom';
import  Home  from './components/Home/Home'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
class App extends Component {

  render() {
    return (
      <div>
        <Route  exact path='/' component={Home} />
        <Route  path='/About' component={About} />
        <Route  path='/Contacts' component={Contacts} />   
      </div>
    );
  }
}

export default App;
