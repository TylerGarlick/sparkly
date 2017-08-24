import React, { Component } from 'react'


export default class extends Component {

  state = {
    search: '',
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.props.performSearch(this.state.search)
  }


  render() {

    return (
      <form onSubmit={this.handleSearch}>
        <fieldset>
          <input type="search"
            minLength="3"
            required
            onChange={e => this.setState({ search: e.target.value })} />
        </fieldset>

        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    )

  }

}

