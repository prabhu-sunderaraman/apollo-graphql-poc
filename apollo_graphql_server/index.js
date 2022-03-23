let { ApolloServer } = require("apollo-server");
let GroupMembersAPI = require("./group_members_api")

let schema = require('./schema');
let resolvers = require('./resolvers');

let server = new ApolloServer({
	typeDefs: schema,
	resolvers,
	dataSources: () => {
		return {
			membersApi: new GroupMembersAPI()
		}
	}
})
server
	.listen(5000)
	.then(response => console.log("GraphQL server running in 5000"));