import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel, Panel, ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from 'react-redux';

import { fetchReports } from '../actions';
import Card from '../components/Card';
import { isNumber } from "util";

const numbers = ['1','2','3','4', '5', '6', '7', '8', '9', '10'];

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      yourLocation: "",
      page: 1
    };
  }

  componentDidMount() {
    const { fetchReports, report } = this.props;
    if(report !== undefined) {
      this.setState({ loading: true });
      fetchReports({ page, yourLocation },
        () => this.setState({ loading: false, page: this.state.page++ })
      );
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('reveive props: ', nextProps);
    const { fetchReports, report } = nextProps;
    if(report === undefined) {
      this.setState({ loading: true });
      fetchReports({ page, yourLocation },
        () => this.setState({ loading: false })
      );
    }
  }

  renderReport = () => {
    const { report } = this.props;
    const { loading } = this.state;
    if(loading) {
      return (
        <div>
          ...loading
        </div>
      );
    } else {
      if(report !== undefined) {
        return (
            <Panel className="schedule__container">
              <Panel.Heading className="schedule-heading__container">
                Reports
              </Panel.Heading>
              <Panel.Body className="schedule-body__container">
                {numbers.map( => {
                  return (
                    <Card title={title} location={location} description={description} />
                  );
                )}
              </Panel.Body>
          </Panel>
        );
     } else {
       return (
         <div>
           No Reports :D
         </div>
       );
     }
    }
  }
  
  validateForm() {
    return this.state.yourLocation.length > 1;
  }
  
  onSubmit = e => {
    e.preventDefault();
    const { yourLocation } = this.state;
    this.setState({ loading: true });
    this.setState({ loading: false });
  };
  
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  renderForm = () => {
    const { loading } = this.state;
    if(loading) {
      return (
        <div>
          ...loading
        </div>
      );
    } else {
      return (
        <Panel className="preference__container">
          <Panel.Heading className="preference-heading__container">
            Location
          </Panel.Heading>
          <Panel.Body className="preference-body__container">
            <form onSubmit={this.onSubmit}>
                <FormGroup controlId="yourLocation" bsSize="large">
                  <ControlLabel>What location do you want to see?</ControlLabel>
                  <FormControl
                    value={this.state.yourLocation}
                    onChange={this.handleChange}
                    type="string"
                  />
                </FormGroup>
                <Button
                  block
                  bsSize="large"
                  type="submit"
                  disabled={!this.validateForm()}
                >
                  Submit
                </Button>
              </form>
          </Panel.Body>
        </Panel>
      );
    }
  }
  render() {
    const { report } = this.props;
    return (
      <div className="dashboard__container">
        <Panel className="profile__container">
          <Panel.Body className="profile-body__container">Panel content</Panel.Body>
        </Panel>
        {report !== undefined ? this.renderReport() : this.renderForm() }
      </div>
    );
  }
}
const mapStateToProps = ({ report }) => {
  return { 
    report: report.report
  };
};
export default connect(mapStateToProps, { fetchReports })(DashboardPage);
