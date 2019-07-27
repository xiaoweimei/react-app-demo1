import React from 'react';
import logo from './logo.svg';

import './App.css';

function sayHi(){
  alert('你点击我啦')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={function(){alert(123)}}>点我</button>
      </header>
    </div>
  );
}

export default App;
