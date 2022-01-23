import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Notfound from './Notfound';
import Navbar from './Navbar';
import Post from './component/Post';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/post/:category" element={<Post/>}/>
    <Route path="/post/:category/:id" element={<Post/>}/>
    <Route path="*" element={<Notfound/>}/>
    
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
