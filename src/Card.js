import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class CustomCard extends HTMLElement {
  connectedCallback() {
	const title = this.getAttribute('title') || '';
	const text = this.getAttribute('text') || '';
	const color = this.getAttribute('color') || 'bg-primary';
	const header = this.getAttribute('header') || '';

	this.innerHTML = `
      <div class="card text-white bg-primary mb-3" style="max-width: 18rem; margin-right: 10px;">
        <div class="card-header">${header}</div>
        <div class="card-body">
          <h5 class="card-title">card1</h5>
          <p class="card-text">${text}</p>
        </div>
      </div> 
<div class="card text-white bg-secondary mb-3" style="max-width: 18rem; margin-right: 10px;">
        <div class="card-header">${header}</div>
        <div class="card-body">
          <h5 class="card-title">card2</h5>
          <p class="card-text">${text}</p>
        </div>
      </div>
<div class="card text-white bg-danger mb-3" style="max-width: 18rem; margin-right: 10px;">
        <div class="card-header">${header}</div>
        <div class="card-body">
          <h5 class="card-title">card3</h5>
          <p class="card-text">${text}</p>
        </div>
      </div>
    `;
  }
}
customElements.define('custom-card', CustomCard);
