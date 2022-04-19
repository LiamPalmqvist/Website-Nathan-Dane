import React from 'react';
import './App.css';
import Header from './components/header';
import s from './components/styles'


function App() {
  return (
    <div className="App">
      <header className="App-header" style={s.h1Styles}>
        <Header />
        <p>Welcome to the website!</p>

      </header>
    </div>
  );
}

export default App;
