import React from 'react'
import PropTypes from 'prop-types'

export default class Form extends React.Component {
  constructor () {
    super()
    this.state = Form.defaultState

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state)
    console.log(this.props.onFormSubmit('tes', 'ccd'))
    // this.props.onFormSubmit(this.state.title, this.state.text)
    // this.setState(Form.defaultState)
    // console.log(this.state)
  }

  handleTitleChange (e) {
    this.setState({title: e.target.value})
  }

  handleTextChange (e) {
    this.setState({text: e.target.value})
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Please enter receipt here</p>
          <div className="form-group">
            <label>Name of receipt:</label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="form-group">
            <textarea className="form-control" name="text" onChange={this.handleTextChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

Form.defaultState = { title: '', text: '' }
Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
}
