const { GraphQLServer } = require('graphql-yoga');
const {prisma} = require('../generated/prisma-client')
const Query = require('../resolvers/Query')
const User = require('../resolvers/User')
const Link = require('../resolvers/Link')
const Mutation = require('../resolvers/Mutation')
const Subscription = require('../resolvers/Subscription')


const resolvers = {
    Query,
    User,
    Link,
    Mutation,
    Subscription
}

/*let links = [{
    id:'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}]

let idCount = links.length;
*/
/*const resolvers = {
    Query : {
        info : ()=> 'This is my API',
        
    },

    Mutation: {
        // 2
        post: (root, args, context) => {
           return context.prisma.createLink({
                description: args.description,
                url: args.url,
           })
        }
    }
}
*/

const server = new GraphQLServer({
    typeDefs : './schema.graphql',
    resolvers,
    context: request => {
        return{
            ...request,
            prisma
        }
    }
})


server.start(
    ()=> console.log('Server running on http://localhost:4000')
)