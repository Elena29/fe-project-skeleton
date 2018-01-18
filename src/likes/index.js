import React from 'react'

export default class Like extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      likes: 0,
      status: 'NONE',
    }
    this.onLike = this.onLike.bind(this)
    this.minLike = this.minLike.bind(this)
  }

  onLike () {
    const likes = this.state.likes + 1
    this.setState({ status: 'ADD', likes })
  }

  minLike () {
    if (this.state.likes === 0) return
    const likes = this.state.likes - 1
    this.setState({ status: 'MINUS', likes })
  }

  render () {
    return (
      <div>
        <p>Test text</p>
        <button className="likeMe" onClick={this.onLike}>Like +{this.state.likes} </button>
        <button className="likeNot" onClick={this.minLike}>Like -{this.state.likes} </button>
      </div>
    )
  }
}
