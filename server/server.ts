import express, { Application, Request, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';
import { authMiddleware } from './utils/auth';
const { typeDefs, resolvers } = require('./schemas'); // Use require for CommonJS modules
import dbConnection from './config/connection';

const PORT: number | string = process.env.PORT || 3001;
const app: Application = express();
const server: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async (): Promise<void> => {
  await server.start();
  server.applyMiddleware({ app });

  dbConnection.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startApolloServer();

