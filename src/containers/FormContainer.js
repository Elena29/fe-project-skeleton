import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/receipts';
import Form from '../receipts/form';

class FormContainer extends React.Component {
    render() {
        console.log(this.props.receipts)
        console.log(this.props.dispatch)

        return (
            <Form onFormSubmit={this.props.dispatchAddReceipt}/>
        )
    }
}

const mapStateToProps = ( { receipts } ) => {
    return receipts;
}

function mapDispatchToProps(dispatch) {
    // return bindActionCreators(actions, dispatch);
    return {
        dispatchAddReceipt: () => dispatch(actions.addReceipt())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)
