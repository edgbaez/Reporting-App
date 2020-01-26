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
      page: 0,
      results: 0,
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
  nextClick() {
    const {page, results} = this.state;
    if(page + 20 <= results){
      this.setState((prevState, props) => ({page: prevState.page + 20}));
  }
}
  prevClick() {
    const {page, results} = this.state;

    if(page - 20 >= 0){
      this.setState((prevState, props) => ({page: prevState.page - 20}));
    }
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
    this.setState({results: list.length})
    const updatedList = list.map((listItems)=>{ 
        return( 
          <div>
          <div class="dividerLine"></div>
                <Card title = {listItems.title} location = {listItems.location} description={listItems.description}/>
                </div>
            );  
    }); 
    return( 
      <div>
        <div align="right">
        <button onClick= {this.prevClick}>Previous</button>  
        <button onClick = {this.nextClick}>Next</button>
        </div>
      <ul>
      {updatedList}</ul> 
      </div>
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
