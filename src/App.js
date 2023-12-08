import logo from './logo.svg';
import './App.css';
import './index.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from './Card.js';
import Home from './Home.js';
import Navibar from './Navibar.js';
import Contact from './Contact.js';

function App() {
  return (
    <div className="App">
	<BrowserRouter>
		<Navibar/>
		<Routes>
		<Route path="/" element={<Home />}/>
		<Route path="/card" element={<Card/>} /> 
      	<Route path="contact" element={<Contact />} /> 
       </Routes>
	</BrowserRouter>
    </div>
  );
}

export default App;
