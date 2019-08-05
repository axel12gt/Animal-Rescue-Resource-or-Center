import React from 'react';
import logo from '../logo.svg';
import Customers from "../components/customers"
import './Test.css';

function Test() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> 
      <Customers />
    </div>
  );
}

export default Test;
