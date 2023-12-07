import logo from './logo.svg';
import './App.css';
import './index.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  "./Card.js";
import  "./Home.js";
import  "./Contact.js";

function App() {
  return (
    <div className="App">
	<BrowserRouter>
		<navi-bar/>
		<Routes>
		<Route path="/" element={<my-home />}/>
		<Route path="/card" element={<custom-card />} /> 
      	<Route path="contact" element={<contact-me />} /> 
       </Routes>
	</BrowserRouter>
    </div>
  );
}

export default App;
