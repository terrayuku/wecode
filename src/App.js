import React, { Component } from 'react';
import './App.css';

// import Signup from './components/Signup';
import Mentors from './components/Mentors';
import Contacts from './components/Contact';
import Partners from './components/Partners';
import Stories from './components/Stories';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stories />
        <Mentors />
        <Partners />
        <Contacts />
      </div>
    );
  }
}

export default App;
