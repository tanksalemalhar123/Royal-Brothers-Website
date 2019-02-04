import React, { Component } from 'react';
import './App.css';
import Refer from './components/Refer';
import './components/Refer.css';
import './components/Navbar.css';
import Navigation from './components/Navigation';
import ImageBody from './components/ImageBody';
import Info from './components/Info';
import Speciality from './components/Speciality';
import BikeInfo from './components/BikeInfo';
import Sponsers from './components/Sponsers';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Refer/>
      <Navigation/>
      <ImageBody/>
      <Info/>
      <Speciality/>
      <BikeInfo/>
      <Sponsers/>
      <Footer/>
      </div>
    );
  }
}

export default App;
