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
        Hello, Welcome to Creeper Report, an unanimous reporting app for crimes, or crime-like, situations.
        This app will collect your events and then sort them based on location in order to warn people
        of possible dangers in their area. 
        </p></div>
        <div className="sourcecode">
          <p>
            Check out the source code for some of our projects.
          </p>
          <a
          className="App-link"
          href="https://github.com/DGGomez/Reporting-App"
          target="_blank"
          rel="noopener noreferrer"
          >Code!</a>        
          </div>
        <div className="developers">
          <div className="developer-Daniel">
              <h1>
                Hi, I'm Daniel. I made this App.
              </h1>
              <p>
                Hey I'm a Ryerson Computer soon to be grad. I build web apps and mobile apps. I like Machine Learning.
                I like building stuff and hope you guys can use some of the stuff I'm building. If you have any ideas
                on what I can add to this app message me at downrampapps@gmail.com.
                <br/><br/>
                Thanks
              </p>
          </div>
        </div>
      </div>

    );
  }
}
export default connect(null)(AboutPage);