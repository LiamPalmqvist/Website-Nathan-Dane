import './App.css';
import s from './components/styles'
import logoTriangle from './images/LogoTringle.svg';
import profilePhoto from './images/profilePhoto.jpg'
import Spotify from './components/Spotify';
import theFall from './images/The_Fall_-_but_its_a_.jpeg'

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

            <img src={profilePhoto} alt="ProfilePhoto" className="displayImage" id="border"/>
            <text className="paragraph">This cool dude is Nathan Dane. He is (not) the one responsible for the creation of this site. I know I'm just typing a bunch of crap in here but temporary text is what it is. Not go and listen to his songs, damnit!</text>
          
          </div> 

          <div className="div">

            <text className="paragraph">This cool dude is Nathan Dane. He is (not) the one responsible for the creation of this site. I know I'm just typing a bunch of crap in here but temporary text is what it is. Not go and listen to his songs, damnit!</text>
            <Spotify link="https://open.spotify.com/album/4VPQEYE833Fk44YdfrVytp?si=DStvqt6-SO64vRpHqRpJCg" className="spotify"/>

          </div> 

          <div className="div">

            <div className="vertDiv">
              <img src={theFall} alt="The Call" className="displayImage"/>
              <Spotify wide link="https://open.spotify.com/album/3Z9gXjkqsy8JGd0oOv3IHJ?si=PbidK7HJQMKA_v_19jxHWQ" className="spotify"/>
            </div>
            
            <text className="paragraph">This cool dude is Nathan Dane. He is (not) the one responsible for the creation of this site. I know I'm just typing a bunch of crap in here but temporary text is what it is. Not go and listen to his songs, damnit!</text>
            
          </div> 

          <div className="div">

            <text className="paragraph">This cool dude is Nathan Dane. He is (not) the one responsible for the creation of this site. I know I'm just typing a bunch of crap in here but temporary text is what it is. Not go and listen to his songs, damnit!</text>
            <Spotify link="https://open.spotify.com/album/1BifqOycPME7H2bs26yhzA?si=jOK0ksORSYukWw6RH_Tcrw" className="spotify"/>

          </div> 

        </span>
      
      </header>
    </div>
  );
}

export default App;
