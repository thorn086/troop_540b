import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";
import Resources from "./Pages/Resources/Resources";
import Gallery from "./Pages/Gallery/Gallery";
import Album from "./components/Album/Album";
import Calendar from "./Pages/Calendar/Calendar";
import SignificantEvent from "./Pages/Calendar/components_calendar/Events/SignigicantEvents-messagePage/significantevent.component";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Calendar" element={<Calendar />} />
        <Route exact path="/mothersday" element={<SignificantEvent />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contacts" element={<Contacts />} />
        <Route exact path="/Resources" element={<Resources />} />
        <Route exact path="/Gallery" element={<Gallery />} />
        <Route exact path="/Gallery/album/:name" element={<Album />} />
      </Routes>
    );
  }
}

export default App;
