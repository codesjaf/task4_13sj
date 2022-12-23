import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./styles.css";
import AboutPage from "./AboutPage";
import ContactsPage from "./ContactsPage";
import Experience from "./Experience";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/#">
              SPA-приложение
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    О себе
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacts">
                    Контактная информация
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/experience">
                    Примеры работы
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contacts">
            <ContactsPage />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}
