const postsResolvers = require('./posts');
const usersresolvers = require('./users');

module.exports = {
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersresolvers.Mutation,
        ...postsResolvers.Mutation
    }
}