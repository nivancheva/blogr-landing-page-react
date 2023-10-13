import './App.css'
import logo from './images/logo.svg';

const links = [
  {text:'Product', url: "#"},
  {text:'Company', url: "#"},
  {text:'Connect', url: "#"}
];

function App() {
  return (
    <div>


      <div className='hero-wrapper'>
        <header className='container'>
          <img src={logo} alt='logo'/>
          <div>
            <nav>
              <ul>
                {links.map((link, idx) => {
                  return (
                    <li key={idx}>
                      <a href={link.url}>{link.text}</a>
                    </li>
                  )
                })}                
              </ul>      
            </nav>
            <div>
              <button className='button button-bare'>Login</button>
              <button className='button button-primary'>Sign Up</button>
            </div>
          </div>

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
