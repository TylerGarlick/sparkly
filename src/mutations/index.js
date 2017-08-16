import { gql, } from 'react-apollo'

import ApolloClient from '../config/graphql'


const AddProductKindMutation = gql`
  mutation ($name: String!, $description: String) {
    createProductKind(name: $name, description: $description, type: Necklace) {
      id
      name
    }
  }
`

export default async (name, description) => {
  return await ApolloClient.mutate({
    mutation: AddProductKindMutation,
    variables: {
      name,
      description,
    },
  })
}