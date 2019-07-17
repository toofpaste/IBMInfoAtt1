import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetUser from './GetUser';
const personality = require('watson-personality')

personality('@billyzacsmith')
  .then(function(personalityProfile) {
    console.log(personalityProfile.traits)
    console.log(personalityProfile.needs)
  })
  .catch(function(error) {
    console.log(error)
  })

  
class App extends Component{
  render(){
  return (
    <div>
    <GetUser />
    </div>
  );
  }
}

export default App;
