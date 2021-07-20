import './App.css';
import Home from './components/title/title.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Content from './components/content/content.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar className="nav-bar"/>
      <Home/>
      <Content/>
      <a className="last" href="https://marvelcinematicuniverse.fandom.com/wiki/Marvel_Cinematic_Universe_Wiki">To know more about other Avengers, check this out xD</a> 
      <Footer/>      
    </div>    
  );
}

export default App;
