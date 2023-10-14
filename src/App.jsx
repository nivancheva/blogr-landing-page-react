import './App.css'
import { useState } from 'react';
import logo from './images/logo.svg';
import iconHamburger from './images/icon-hamburger.svg';
import iconClose from './images/icon-close.svg';

const links = [
  {text:'Product', url: "#"},
  {text:'Company', url: "#"},
  {text:'Connect', url: "#", children: [
    {text:'Contact', url: "#"},
    {text:'Newsletter', url: "#"},
    {text:'LinkedIn', url: "#"}
  ]}
];

function App() {
  const [menuVisible, setMenuvisile] = useState(false);
  const [expandedLink, setExpandedLink] = useState({});

  function toggleMenu() {
    setMenuvisile(!menuVisible);
  }

  function toggleSubMenu(e, link) {
    e.stopPropagation();

    if (expandedLink === link) {
      setExpandedLink({});
    } else {
      setExpandedLink(link);
    }
  }

  return (
    <div>


      <div className='hero-wrapper' onClick={(e) => toggleSubMenu(e, {})}>
        <header className='container header'>
          <picture><img src={logo} alt='logo'/></picture>
          <div className={`navigation-bar ${menuVisible ? "" : "menu-hidden"}`}>
            <nav>
              <ul className='links-nav'>
                {links.map((link, idx) => {
                  return (
                    <li key={idx}>
                      <a className='links' onClick={(e) => toggleSubMenu(e, link)} href={link.url}>{link.text}</a>
                      {
                        expandedLink === link && link.children && 
                        <div>
                          <ul className='links-nav-submenu'>
                            {link.children.map((child, childIdx) => {
                              return (
                                <li className='link-submenu' key={childIdx}>
                                  <a href={child.url}>{child.text}</a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      }
                    </li>
                  )
                })}                
              </ul>      
            </nav>
            <div className='login-buttons'>
              <button className='button-bare'>Login</button>
              <button className='button button-sign_up'>Sign Up</button>
            </div>        
          </div>
          <button onClick={toggleMenu} className='button-toggle'>
              <img src={menuVisible ? iconClose : iconHamburger}/>
          </button>

        </header>

        <div className='container hero'>
          <h1>A modern publishing platform</h1>
          <p className='sub-header'>Grow your audience and build your online brand</p>
          <div className='flex-group start-buttons'>
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
