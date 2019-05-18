import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { relative } from "path";

class Footer extends Component {
  render() {
    return (
      <footer style={styles.footerStyle} className="text-center navbar-fixed-bottom .bg-secondary">
      
      <div className="copyright-text">
        <p>© Creeper Reports 2019</p>
      </div>
      </footer>
    );
  }
}

const styles = {
  footerStyle: {
    padding: "10px",
    color: 'white',
    background: "grey",
    position: 'absolute',
    left: '0',
    width: '100%',
    bottom: '0'
    
  }
};

export default Footer;
