import './App.css';
import s from './components/styles'
import logoTriangle from './images/LogoTringle.svg';
import profilePhoto from './images/profilePhoto.jpg'
import Spotify from './components/Spotify';

function App() {
  return (
    <div className="App">
      
      <header className="App-header" style={s.h1Styles}>

        <div className="topDiv" id="top">
          
          <img src={logoTriangle} className="logoImage" alt="logo"/>  
          <header className="header">Nathan Dane</header>
        
        </div>          
        
      
        <span className="span">
          
          <div className="div">

            <img src={profilePhoto} alt="ProfilePhoto" className="displayImage"/>
            <text className="paragraph">This cool dude is Nathan Dane. He is the one responsible for the creation of this site. I know I'm just typing a bunch of shit in here but temporary text is what it is. Not go and listen to his songs, damnit!</text>
          
          </div> 

          <div className="div">

            <text className="paragraph">This cool dude is Nathan Dane. He is the one responsible for the creation of this site. I know I'm just typing a bunch of shit in here but temporary text is what it is. Not go and listen to his songs, damnit!</text>
            <Spotify link="https://open.spotify.com/album/4VPQEYE833Fk44YdfrVytp?si=DStvqt6-SO64vRpHqRpJCg" className="spotify"/>

          </div> 

        </span>
      
      </header>
    </div>
  );
}

export default App;
