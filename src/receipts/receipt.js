import React from 'react'
import PropTypes from 'prop-types'

export default class Receipt extends React.PureComponent {
  render () {
    const { text, title } = this.props
    return (
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    )
  }
}

Receipt.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
