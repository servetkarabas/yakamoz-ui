import React from "react";
import Yakamoz from "./components/Yakamoz";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="heading">yakamoz</h1>
        </header>
        <main>
          <Yakamoz defaultKeyword="aesthetic" />
        </main>
        <footer className="mt-5 footer">
          <div className="footer-content">
            <p className="credit">
              Coded by{" "}
              <a
                href="https://github.com/s-shemmee"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                s-shemmee
              </a>
              ,{" "}
              <a
                href="https://github.com/shemmee/Yakamoz-React-App"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Open sourced on Github
              </a>
              . Hosted on Vercel
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
