import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Home extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const div = document.createElement('div');
    div.innerHTML = '<h1>CS 230L</h1> <h2>Section - 03</h2> <p>800323506</p> <p>Hi I am Parker Morgan</p>';

    shadow.appendChild(div);
  }
}
customElements.define('my-home', Home);