import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/receipts'
import Receipts from '../receipts/index'
import Receipt from '../receipts/receipt'

export class ReceiptsList extends React.PureComponent {
  render () {
    return (
      <Receipts receipts={this.props.receipts} />
    )
  }
}

const mapStateToProps = ({ receipts }) => receipts

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

ReceiptsList.propTypes = {
  receipts: PropTypes.arrayOf(Receipt).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptsList)
