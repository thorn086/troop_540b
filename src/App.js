import React, { Component } from "react";
import { Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';
import Resources from './Pages/Resources/Resources';
import Gallery from './Pages/Gallery/Gallery';
import Album from './components/Album/Album';
import ScrollToTop from './components/scroll/scroll';
class App extends Component {

  render() {
    return (
      <div>
        <ScrollToTop />
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Contacts' component={Contacts} />
        <Route exact path='/Resources' component={Resources} />
        <Route exact path='/Gallery' component={Gallery} />
        <Route exact path='/Gallery/album/:name' component={Album} />
      </div>
    );
  }
}

export default App;
