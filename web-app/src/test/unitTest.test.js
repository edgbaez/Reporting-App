// mainPage.test.js
import React from 'react';
import DashboardPage from '../pages/MainPage.js';
import ReportPage from '../pages/ReportPage.js';

import Card from '../components/Card.js';
import Footer from '../components/Footer.js';
import NavBar from '../components/NavBar.js';

import {shallow} from 'enzyme';

describe("Testing page rendering", function(){

  it('renders DashboardPage without crashing', () => {
    shallow(<DashboardPage />);
  });

  it('renders  without crashing', () => {
    shallow(<ReportPage />);
  });
    
}
     
describe("Testing components rendering", function(){

  it('renders DashboardPage without crashing', () => {
    shallow(<Card title="test" location="123 test" description="something happened" />);
  });

  it('renders Footer without crashing', () => {
    shallow(<Footer />);
  });
    
  it('renders NavBar without crashing', () => {
    shallow(<NavBar />);
  }); 
    
}
     
describe("Testing actions rendering", function(){

  it('report submition', () => {
  });

  it('report reading', () => {
  });
    
}
