import logo from './logo.svg';
import './App.css';
import './index.js';

const naviBar = document.createElement('navi-bar');

document.body.appendChild(naviBar);
function App() {
  return (
    <div className="App">
	<navi-bar/>
      <h1>CS 230L</h1>
	<h2>Section - 03</h2>
	<p>800323506</p>
	<p>Hi I am Parker Morgan</p>
<custom-card title="card1"/> <custom-card title="card2" color="bg-secondary"/><custom-card title="card3" color="bg-danger"/>
    </div>
  );
}

export default App;
