import React, { Component } from "react";
import { Route } from 'react-router-dom';
import  Home  from './components/Home/Home'
import About from './components/About/About'

class App extends Component {

  render() {
    return (
      <div>
        <Route  exact path='/' component={Home} />
        <Route  exact path='/About' component={About} />   
      </div>
    );
  }
}

export default App;
