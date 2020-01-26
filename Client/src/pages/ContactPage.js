import React, {Component} from "react";
import { connect } from 'react-redux';

class AboutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    return (
      <div className="container">
        <div className="title"><h1>About</h1></div>
        <div className="body"><p>
        Hello, Welcome to Down Ramp Apps. We are a group of programs that design, create, and maintain apps.
        If you want to buy an app or give us a suggestion go to the contact page and leave us a message. Check
        out our other projects while you're here. 
        </p></div>
        <div className="sourcecode">
          <p>
            Check out the source code for some of our projects.
          </p>
          <a
          className="App-link"
          href="https://github.com/DGGomez"
          target="_blank"
          rel="noopener noreferrer"
          >Code!</a>        
          </div>
        <div className="developers">
          <div className="developer-Daniel">
              <h1>
                Hi, I'm Daniel
              </h1>
              <p>
                Hey I'm a Ryerson Computer soon to be grad. I build web apps and mobile apps. I like Machine Learning.
                I like building stuff and hope you guys can use some of the stuff I'm building.
              </p>
          </div>
        </div>
      </div>

    );
  }
}
export default connect(null)(AboutPage);