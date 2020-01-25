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

import Toolbar from './components/toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
        <div style={{ height: '100vh' }}>
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        
      </div>
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
