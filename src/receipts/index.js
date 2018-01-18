import React from 'react'
import PropTypes from 'prop-types'
import Receipt from './receipt'

export default class Receipts extends React.Component {
  renderReceipts () {
    return (
      <ul>
        {
          this.props.receipts.map(() => (
            <li>
              <Receipt title="test" text="test text" />
            </li>
          ))
        }
      </ul>
    )
  }

  render () {
    console.log(this.props.receipts)
    return (
      <div>
        <Receipt title="test" text="test text" />
        <Receipt title="test2" text="test text2" />
      </div>
    )
  }
}

Receipts.propTypes = {
  receipts: PropTypes.arrayOf(Receipt).isRequired,
}

