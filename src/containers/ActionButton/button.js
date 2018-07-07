import React, { Component } from 'react';
import { connect } from 'react-redux';

import { simpleAction } from '../../actions/simpleAction'

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
});
const mapStateToProps = state => ({
    ...state
});
class Button extends Component {
    simpleAction = (event) => {
        this.props.simpleAction();
    }
    render() {
        return (
            <div>

                <pre>
             {
                 JSON.stringify(this.props)
             }
          </pre>
                <button onClick={this.simpleAction}>Test redux action</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);