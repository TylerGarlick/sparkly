import React, { Component } from 'react'

export default class extends Component {

  state = {
    name: '',
    description: '',
  }

  render() {
    const { name, description } = this.state
    const { formSubmitted } = this.props

    return (
      <form onSubmit={e => formSubmitted(e, this.state)}>
        <fieldset>
          <input type="text" placeholder="Name" value={name} onChange={e => this.setState({ name: e.target.value })} />
        </fieldset>
        <fieldset>
          <textarea placeholder="description" value={description} onChange={e => this.setState({ description: e.target.value })} />
        </fieldset>

        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    )
  }
}

// export default () => (
//   <form>
//
//   </form>
// )