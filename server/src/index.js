const { ApolloServer, gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    nothings: [String]
  }
`;

const server = new ApolloServer({
  typeDefs
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mock/browser');
  worker.start();
  console.log('Add mock...');
}
