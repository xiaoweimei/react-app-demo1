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
        <button onClick={function(){alert("hello world")}}>点我开启新大门</button>
      </header>
    </div>
  );
}

export default App;
