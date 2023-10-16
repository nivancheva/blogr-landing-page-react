import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';
import SectionOne from './components/SectionOne';


function App() {
  

  return (
    <div className='app-wrapper'>
      <Header />

      <SectionOne />

      <SectionTwo />

      <SectionThree />

      <Footer />
    </div>
  )
}

export default App
