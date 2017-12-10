import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/receipts';
import Receipts from '../receipts/index';

class ReceiptsList extends React.Component {
    render() {
        return (
            <Receipts
                receipts={this.props.receipts}
            />
        )
    }
}

const mapStateToProps = ( { receipts } ) => {
    return receipts;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptsList)
