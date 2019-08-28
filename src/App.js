import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Offcanvas} from './components/mmenu.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <div class="page">
          <div class="header">
            <a href="#menu">Demo</a>
          </div>
        </div>
        <Offcanvas 
          id="menu" 
          options={{
            "extensions": [
              "pagedim-black"
            ]
          }}
        >
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/work">Our work</a></li>
            <li><span>About us</span>
              <ul>
                <li><a href="/about/history">History</a></li>
                <li><span>The team</span>
                  <ul>
                    <li><a href="/about/team/management">Management</a></li>
                    <li><a href="/about/team/sales">Sales</a></li>
                    <li><a href="/about/team/development">Development</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><span>Services</span>
              <ul>
                <li><a href="/services/design">Design</a></li>
                <li><a href="/services/development">Development</a></li>
                <li><a href="/services/marketing">Marketing</a></li>
              </ul>
            </li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </Offcanvas>
      </section>
			<footer className="App-footer">
				(c) Copyright - Mike Ludemann
			</footer>
    </div>
  );
}

export default App;
