import React from 'react';
import './App.css';

// Picture
import Logopic from './img/LogoBoss.jpg'

// Effect
import ReactTypingEffect from 'react-typing-effect'

// link
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route} from 'react-router-dom'

//Content
import Home from './contents/Home'
import Skills from './contents/Skills'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">

          <div className="logo">
            <a href="/"><img src={Logopic} alt="Logo" className="Logopic"/></a> 
          </div>

          <div className="header">
            <ReactTypingEffect text={['Boss Ravisut Srichan','Front-End Developer']} speed={80} eraseDelay={200} className="typingeffect"/>
          </div>

          <div className="nav">   
            <nav>
              <ul><Navbar/></ul>
            </nav>
          </div>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/skills">
            <Skills/>
          </Route>
              
          <div className="footer">
            <div className="social">
              <a href="https://github.com/Boszerie" target="_blank" rel="noopender noreferrer"><i class="fab fa-github"></i></a>
              <a href="https://www.instagram.com/bossravisut/" target="_blank" rel="noopender noreferrer"><i class="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/bossravisut/" target="_blank" rel="noopender noreferrer"><i class="fab fa-facebook"></i></a>
            </div>
          </div>

        </div>
      </div>
    </Router>
  );
}

export default App;
