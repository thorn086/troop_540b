import React, { Component } from "react";
import { Route } from 'react-router-dom';
import Home  from './Pages/Home/Home';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';
import Resources from './Pages/Resources/Resources';
import Gallery from './Pages/Gallery/Gallery';


class App extends Component {

  render() {
    return (
      <div>
        <Route  exact path='/' component={Home} />
        <Route  exact path='/About' component={About} />
        <Route  exact path='/Contacts' component={Contacts} />
        <Route  exact path='/Resources' component={Resources} />
        <Route  exact path='/Gallery' component={Gallery} />    
      </div>
    );
  }
}

export default App;
