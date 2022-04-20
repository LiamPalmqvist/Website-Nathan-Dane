import './App.css';
import s from './components/styles'
import logoTriangle from './images/LogoTringle.svg';
import Spotify from './components/Spotify';

function App() {
  return (
    <div className="App">
      
      <header className="App-header" style={s.h1Styles}>

        <div className="topDiv" id="top">
      
          <header className="header">Nathan Dane</header>
        
        </div>  

        <img src={logoTriangle} className="image" alt="logo"/>

        <p className="p">Welcome to the website!</p>

        <Spotify link="https://open.spotify.com/album/4VPQEYE833Fk44YdfrVytp?si=DStvqt6-SO64vRpHqRpJCg"/>

        <span className="span1">
          <p>Hello there!</p>
        </span>
      
      </header>
    </div>
  );
}

export default App;
