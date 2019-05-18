import React, { Component } from 'react'
// import { ButtonToolbar, Button } from "react-bootstrap"
import { connect } from 'react-redux'
import { createData } from '../actions'

class ClassifierPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Classify Page',
      location: '',
      description: ''
    }
  }

  render () {
    return (
      <div>

      </div>
    )
  }
}
export default connect(null, { createData })(ClassifierPage)
