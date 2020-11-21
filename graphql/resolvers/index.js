const postsResolvers = require('./posts');
const usersresovlers = require('./users');

module.exports = {
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersresovlers.Mutation
    }
}