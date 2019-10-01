import React, { Component } from 'react'
// import { ButtonToolbar, Button } from "react-bootstrap"
import { connect } from 'react-redux'
import { createData } from '../actions'
import Columns from 'react-columns';

// get area rating
class ClassifierPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Classify Page',
      location: '',
      description: '',
      loaded: false
    }
  }

  componentDidMount(){
    const { user, token, offsite, offsiteFake } = this.props;
  
      // if(user !== undefined && user.active){
          
      // }else{
      //     this.props.history.push("/");
      // }
  }

  componentDidUpdate() {
    console.log(this.props);
    }
  // handle refresh
  handleRefresh(time){
        this.intervalID = setInterval(this.offsiteFake.bind(this), time*1000);
  }

  renderList() {
    const list = this.props.offsite; 
  
    const updatedList = list.map((listItems)=>{ 
        return( 
          <div>
          <div class="dividerLine"></div>
                <Columns columns="9">
                <div>{listItems.ticketNum}</div>
                </Columns>
                </div>
            );  
    }); 
    return( 
      <ul>
        <Columns columns="9">
  <div>ticketNum</div>
  </Columns>
      {updatedList}</ul> 
  ); 
  }

  render () {
    var {loaded} = this.state;

    return (
      <div>
    <div className="Results">
    {loaded && this.renderList()}
    </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    searchQuery: state.query
  };
};

export default connect(mapStateToProps, { createData })(ClassifierPage)
