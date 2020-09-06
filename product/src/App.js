import React from "react";
import "./App.css";
import upp from "./components/images/upp.jpg";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="brand-title">Brand</div>
        <a href="https://www.google.com" className="toggle-button">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </a>
        <div className="navbar-links">
          <ul>
            <li>
              <a id="one" href="https://www.google.com">
                PRODUCTS
              </a>
            </li>
            <li>
              <a id="one" href="https://www.google.com">
                HOW IT WORKS
              </a>
            </li>
            <li>
              <a id="one" href="https://www.google.com">
                TECHNOLOGY
              </a>
            </li>
            <li>
              <a id="one" href="https://www.google.com">
                EERO SECURE
              </a>
            </li>
            <li>
              <a id="one" href="https://www.google.com">
                REVIEWS
              </a>
            </li>
            <li>
              <a id="one" href="https://www.google.com">
                SUPPORT
              </a>
            </li>
          </ul>
        </div>
        <span className="shop">SHOP</span>
      </nav>
      <div className="firstcontainer">
        <div className="productimage">
          <img src={upp} alt="" />
        </div>
        <div className="productdiscription">
          <h1>1 eero Pro + 2 eero Beacons</h1>
          <h4>Flexible coverage for large homes.</h4>
          <p>
            1 eero Pro and 2 Beacons give you a fast, reliable WiFi setup that
            covers up to 5,500 sq. ft. eero Pro plugs directly into your modem
            and gives you the fastest WiFi on the block. eero Beacons plug
            straight into any power outlet — no strings attached, no shelves
            required.
          </p>
          <div className="price">$399</div>
          <hr />

          <div className="choice">
            Or finance as low as $19/mo.
            <a href="www.google.com"> View details</a>
          </div>
          <div className="amazone">
            <a href="www.amazone.com">BUY ON AMAZONE</a>
          </div>
        </div>
      </div>
      <div className="slider-container">
        <div className="menu">
          <label htmlFor="slide-dot-1" />
          <label htmlFor="slide-dot-2" />
          <label htmlFor="slide-dot-3" />
        </div>
        <input id="slide-dot-1" type="radio" name="slides" defaultChecked />
        <div className="slide slide-1" />
        <input id="slide-dot-2" type="radio" name="slides" />
        <div className="slide slide-2" />
        <input id="slide-dot-3" type="radio" name="slides" />
        <div className="slide slide-3" />
      </div>
    </div>
  );
}

export default App;
