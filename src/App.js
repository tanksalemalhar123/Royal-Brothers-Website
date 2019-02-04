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
import TestNav from './components/TestNav';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Refer/>
      <TestNav/>
      <ImageBody/>
      <Info/>
      <Speciality/>
      <BikeInfo/>
      <Sponsers/>
      <Footer/>
      <TestNav/>
      </div>
    );
  }
}

export default App;
