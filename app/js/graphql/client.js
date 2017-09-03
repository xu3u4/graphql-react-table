import ApolloClient, {
  createNetworkInterface,
  addTypeName
} from 'apollo-client';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: 'http://localhost:8000/api'}),
  queryTransformer: addTypeName,
  initialState: {
    rows: [
      { seq: 1, Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' },
      { seq: 2, Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' }
    ]
  }
});
export default client;