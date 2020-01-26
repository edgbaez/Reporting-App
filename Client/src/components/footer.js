import React from 'react';

{/* requires bootstrap*/}
function Footer(){
    return (
        <div className = "main-footer">
                  <footer className="text-center navbar-fixed-bottom .bg-secondary">

                <div className = "row">
                    {/*column 1*/}
                    <div className= "col-sm-4">
                        <h4>Pages</h4>
                        <ul className = "list-unstyled">
                            <li><a href="/">Main</a></li>
                            <li><a href="/report">Reporting</a></li>
                            <li><a href="/contact">About Us</a></li>
                            <li><a href="/privacy">Privacy</a></li>

                        </ul>
                    </div>
                    {/*column 2*/}

                    <div className= "col-sm-4">
                        <h4>Contact Info</h4>
                        <ul className = "list-unstyled">
                            <li>Email: downrampapps@gmail.com</li>
                            <li>Address: N/A</li>
                            <li>Phone #: N/A</li>
                        </ul>
                    </div>
                    {/*column 3*/}

                    <div className= "col-sm-4">
                        <h4>Source Code and Other projects</h4>
                        <ul className = "list-unstyled">
                            <li><a href= "https://github.com/DGGomez/Reporting-App">Github</a></li>
                        </ul>
                    </div>
                </div>
                <div className = "footer-bottom copyright-text">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Creeper Report - All Rights Reserved
                    </p>
                </div>    
                </footer>

        </div>
    );
}

export default Footer;