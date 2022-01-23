import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Notfound from './Notfound';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="*" element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
