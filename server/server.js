const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000).then(({url}) => {
    console.log(`server ready at ${url}`);
})