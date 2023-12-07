import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Contact extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const div = document.createElement('div');
    div.innerHTML = '<form class="form-inline">  <div class="form-group mx-sm-3 mb-2"><label for="inputPassword2" class="sr-only">Email</label><input type="password" class="form-control" id="inputPassword2" placeholder="Email"></div><button type="submit" class="btn btn-primary mb-2">Send Email</button></form>';

    shadow.appendChild(div);
  }
}
customElements.define('contact-me', Contact);