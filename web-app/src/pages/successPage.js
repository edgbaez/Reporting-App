import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';

class SuccessPage extends Component {
    componentDidMount() {
            setTimeout(() => this.props.history.push('/'), 2000);
    }
    render() {
        return (
            <div>
                <div>
                    <h3>You have submited your report Thank You!</h3>
                </div>
                <div>
                    <div>
                        <p>You will now be re-directed!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { SuccessPage })(SuccessPage);