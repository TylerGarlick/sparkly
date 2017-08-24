import React, { Component } from 'react'

import { gql, graphql } from 'react-apollo'

import SearchForm from '../../components/searching/products'

import Client from '../../config/graphql'


class Products extends Component {

  state = {
    query: ''
  }


  handlePerformSearch = search => {
    this.props.data.refetch({ search })
  }

  render() {

    const { allProductKinds = []} = this.props.data

    return (
      <div>
        <h1>Products</h1>
        <SearchForm performSearch={this.handlePerformSearch} />




        {allProductKinds.map(product => (
          <div key={product.id}>
            <div>{product.name}</div>
            <div>{product.price}</div>
          </div>
        ))}
      </div>
    )
  }
}

const SEARCH_QUERY = gql`
  query ($search: String!) {
    allProductKinds(filter:{
      name_contains: $search
    }) {
      id
      name
      sku
    }
  }
`


export default graphql(SEARCH_QUERY, { options: { variables: { search: `` } } })(Products)
