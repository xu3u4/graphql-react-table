import ApolloClient, {
  createNetworkInterface
} from 'apollo-client';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:8000/api' }),
  addTypename: false
});
export default client;
