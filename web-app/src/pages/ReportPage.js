import React, {Component} from "react";
import {Button, FormGroup, FormControl } from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {createData} from "../actions";

class ReportPage extends Component {
constructor(props) {
    super(props);

    this.state = {
        title: "",
        location: "",
        description: ""
    };
}

componentDidMount(){
  console.log(this.props);
}
validateForm() {
    return this.state.title.length > 0 && this.state.location.length > 0 && this.state.description.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, location, description } = this.state;
    console.log('submit: ', title, location, description);

    this.props.createData(title, location, description, () => this.props.history.push("/"));
    this.props.history.push("/success")
  }
  render() {
    return (

      <div className="container center-block">
      <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <form onSubmit={this.handleSubmit}>
          <FormGroup className="form-horizontal" controlId="title" bsSize="large">
            <div>Title</div>
            <FormControl
              autoFocus
              type="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="location" bsSize="large">
            <div>Location</div>
            <FormControl
              value={this.state.location}
              onChange={this.handleChange}
              type="location"
            />
          </FormGroup>
          <FormGroup controlId="description" bsSize="large">
            <div>Description</div>
            <FormControl
              value={this.state.description}
              onChange={this.handleChange}
              type="description"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
        </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { createData })(ReportPage);
