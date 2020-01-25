import React, {Component} from "react";
import {Button, FormGroup, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from 'react-redux';
import { readData } from '../actions';
import Card from '../components/card';
import Columns from 'react-columns';

// show reports
class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yourLocation: "",
      page: 1,
      loaded: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { loginUser, history } = this.props;
    const { yourLocation, page } = this.state;
    var query = {
      yourLocation: this.yourLocation,
      page: this.page
    };
    readData({query},
      () => this.setState({ loading: true })
    );
  }

  componentDidUpdate() {
    console.log(this.props);
    }
  // handle refresh
  handleRefresh(time){
        this.intervalID = setInterval(this.readData.bind(this), time*1000);
  }
  renderList() {
    const list = this.props.searchQuery; 
  
    const updatedList = list.map((listItems)=>{ 
        return( 
          <div>
          <div class="dividerLine"></div>
                <Card title = {listItems.title} location = {listItems.location} description={listItems.description}/>
                </div>
            );  
    }); 
    return( 
      <ul>
      {updatedList}</ul> 
  ); 
  }
  
  validateForm() {
    return this.state.yourLocation.length > 1;
  }
  
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  renderForm = () => {
    var {loaded} = this.state;

      return (
        <div className={styles.center}>
          <div className="preference-heading__container">
            {/* Location */}
          </div>
          <div className="preference-body__container">
            <form onSubmit={this.onSubmit}>
                <FormGroup controlId="yourLocation" bsSize="large">
                  <div>What location do you want to see?</div>
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
          </div>
          <div className="Results">
    {loaded && this.renderList()}
    </div>
        </div>
      );
    
  }
  render() {
    return (
      <div className="dashboard__container">
        <div className="profile__container">
          <div className="profile-body__container"></div>
        </div>
        {this.renderForm() }
      </div>
    );
  }
}

const styles = {
  center: {
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: "200px"
  }
}

const mapStateToProps = state => {
  return { 
    searchQuery: state.query
  };
};


export default connect(mapStateToProps, { readData })(DashboardPage);
