import React, { Component } from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {connect} from "react-redux";

import DashboardPage from "./pages/MainPage";
import ReportPage from "./pages/ReportPage";
import ClassifierPage from "./pages/ClassifierPage";
import SuccessPage from "./pages/successPage";

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
                <Route path="/" exact component={DashboardPage} />
                <Route path="/dashboard" exact component={DashboardPage} />
                <Route path="/report" exact component={ReportPage} />
                <Route path="/classify" exact component={ClassifierPage} />
                <Route path="/success" exact component={SuccessPage} />
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
