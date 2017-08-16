import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj5mj276n7tyj01224emckwt9',
})

const client = new ApolloClient({
  networkInterface: networkInterface,
})

export default client