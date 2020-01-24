import React, { Component } from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {connect} from "react-redux";

import ContactPage from "./pages/ContactPage";
import SearchPage from "./pages/SearchPage";
import ReportPage from "./pages/ReportPage";
import PrivacyPage from "./pages/PrivacyPage";

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
        <div style={{ height: '100vh' }}>
        <NavBar/>
          <Router>
            <div class='container' style={{ marginBottom: '7rem' }}>
                <Route path="/" exact component={SearchPage} />
                <Route path="/dashboard" exact component={SearchPage} />
                <Route path="/report" exact component={ReportPage} />
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/privacy" exact component={PrivacyPage} />
            </div>
          </Router> 
          <div>
            <Footer/>
          </div>
        </div>
    );
  }
}

export default App;
