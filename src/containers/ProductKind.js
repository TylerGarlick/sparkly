import React, { Component } from 'react'
import {
  compose,
  gql,
  graphql,
} from 'react-apollo'



import UpdateProductKind from '../components/UpdateProductKind'


class ProductKind extends Component {

  handleFormSubmit = async (e, productKind) => {
    e.preventDefault()

    const result = this.props.addProductKind({
      variables: productKind,
    })

    console.log(result)
  }

  render() {
    const { loading, allProductKinds = [] } = this.props.query

    return (
      <div>
        <h1>Product Kinds</h1>
        {!loading && allProductKinds.map(productKind => (
          <div key={productKind.id}>
            {productKind.name}<br />
            {productKind.description}
          </div>
        ))}

        {/*<UpdateProductKind formSubmitted={this.handleFormSubmit} />*/}
      </div>
    )
  }
}


const Query = gql`{
  allProductKinds {
    id
    name
    description
  }
}`

const AddProductKindMutation = gql`
  mutation ($name: String!, $description: String) {
    createProductKind(name: $name, description: $description, type: Necklace) {
      id
      name
    }
  }
`


export default compose(
  graphql(Query, { name: 'query' }),
  graphql(AddProductKindMutation, { name: 'addProductKind' }),
)(ProductKind)