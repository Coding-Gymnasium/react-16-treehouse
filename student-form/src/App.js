import React, { Component } from 'react';
import './App.css';

import StudentForm from './components/StudentForm';
import ErrorBoundary from './components/ErrorBoundary';
import Teachers from './Teachers';
import Header from './Header';
import Footer from './Footer';

class App extends Component {

  render() {
    return [
      <div className="App">
        <Header key="head" />  
        <Teachers key="teach" />
        <Footer key="foot" />
      </div>
    ];
  }
}

export default App;
