import './App.css';
import s from './components/styles'
import logoTriangle from './images/LogoTringle.svg';
import Spotify from './components/Spotify'

function App() {
  return (
    <div className="App">
      
      <header className="App-header" style={s.h1Styles}>

        <div className="topDiv" id="top">
      
          <header className="header">Nathan Dane</header>
        
        </div>  

        <img src={logoTriangle} className="image" alt="logo"/>

        <p className="p">Welcome to the website!</p>

        <Spotify link="https://open.spotify.com/artist/1oJ2Y10ugDuIaqrvYjTIF2?si=3KsIphnCRjejoxw-cY28uQ"/>

        <span className="span1">
          <p>Hello there!</p>
        </span>
      
      </header>
    </div>
  );
}

export default App;
