import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import * as actions from '../actions/receipts'
import Form from '../receipts/form'
import Receipt from '../receipts/receipt'

class FormContainer extends React.PureComponent {
  render () {
    console.log(this.props.receipts)
    // console.log(this.props.dispatch)

    return (
      <Form onFormSubmit={this.props.dispatchAddReceipt} />
    )
  }
}

const mapStateToProps = ({ receipts }) => receipts

function mapDispatchToProps (dispatch) {
  // return bindActionCreators(actions, dispatch);
  return {
    dispatchAddReceipt: () => dispatch(actions.addReceipt())
  }
}

FormContainer.propTypes = {
  dispatchAddReceipt: PropTypes.func.isRequired,
  receipts: PropTypes.arrayOf(Receipt).isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)
