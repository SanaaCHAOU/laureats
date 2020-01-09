import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';

function Bouton(props) {
  return <span><button>Click me</button><button>Click me2</button></span>
}

function App() {
  let listLinkes = ["Accueil"];
  return (
    <div className="App">
      <Header links={listLinkes} />
    </div>
  );
}

export default App;
