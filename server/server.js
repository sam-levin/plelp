

const express = require ('express')
const { ApolloServer } = require('apollo-server-express')
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
const {authMiddleware} = require('./utils/auth');
>>>>>>> feature/schemas
>>>>>>> bdaf5ea175cce9deabc5860550c6412320ad6d7b
=======
>>>>>>> feature/testing
const {typeDefs, resolvers} = require('./schemas')
const db = require('./config/connection')

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
})

const app = express();

app.use(express.urlencoded({ extended: false}))
app.use(express.json());

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    // integrate our Apollo server with the Express application as middleware
    server.applyMiddleware({ app });
    
    db.once('open', () => {
        app.listen(PORT, () => {
          console.log(`API server running on port ${PORT}!`);
          // log where we can go to test our GQL API
          console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
      })
    };
    
    // Call the async function to start the server
    startApolloServer(typeDefs, resolvers);