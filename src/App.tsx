import './App.css';
import s from './components/styles'
import logoTriangle from './images/LogoTringle.svg';

function App() {
  return (
    <div className="App">
      
      <header className="App-header" style={s.h1Styles}>

        <div className="div" id="top">
        
          <img src={logoTriangle} className="image" alt="logo"/>
          <header className="header">Welcome to the website!</header>
        
        </div>  

        <p className="p">Welcome to the website!</p>
      
      </header>
    </div>
  );
}

export default App;
