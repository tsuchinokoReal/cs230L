import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

class NaviBar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const div = document.createElement('div');
    div.innerHTML = '<nav class="navbar navbar-light bg-light"> <div class="container-fluid"> <a class="navbar-brand">Navbar</a> <form class="d-flex"> <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> <button class="btn btn-outline-success" type="submit">Search</button></form> </div></nav>';

    shadow.appendChild(div);
  }
}
class CustomCard extends HTMLElement {
  connectedCallback() {
	const title = this.getAttribute('title') || '';
	const text = this.getAttribute('text') || '';
	const color = this.getAttribute('color') || 'bg-primary';
	const header = this.getAttribute('header') || '';

	this.innerHTML = `
      <div class="card text-white ${color} mb-3" style="max-width: 18rem; margin-right: 10px;">
        <div class="card-header">${header}</div>
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${text}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('custom-card', CustomCard);
customElements.define('navi-bar', NaviBar);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
