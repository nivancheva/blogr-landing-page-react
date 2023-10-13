import './App.css'
import { useState } from 'react';
import logo from './images/logo.svg';
import iconHamburger from './images/icon-hamburger.svg';
import iconClose from './images/icon-close.svg';

const links = [
  {text:'Product', url: "#"},
  {text:'Company', url: "#"},
  {text:'Connect', url: "#"}
];

function App() {
  const [menuVisible, setMenuvisile] = useState(false)

  function toggleMenu() {
    setMenuvisile(!menuVisible);
  }

  return (
    <div>


      <div className='hero-wrapper'>
        <header className='container header'>
          <picture><img src={logo} alt='logo'/></picture>
          <div className={`navigation-bar ${menuVisible ? "" : "menu-hidden"}`}>
            <nav>
              <ul className='links-nav'>
                {links.map((link, idx) => {
                  return (
                    <li key={idx}>
                      <a href={link.url}>{link.text}</a>
                    </li>
                  )
                })}                
              </ul>      
            </nav>
            <div className='login-buttons'>
              <button className='button button-bare'>Login</button>
              <button className='button button-primary'>Sign Up</button>
            </div>        
          </div>
          <button onClick={toggleMenu} className='button-toggle'>
              <img src={menuVisible ? iconClose : iconHamburger}/>
          </button>

        </header>

        <div className='container'>
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div>
            <button className='button button-primary'>Start for Free</button>
            <button className='button button-outline'>Learn More</button>
          </div>
        </div>
      
      </div>

      {/* ... */}
    </div>
  )
}

export default App
