const axios = require("axios");
const posts = require("./fixtures/posts");

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require("graphql");

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    body: { type: GraphQLString },
    date: { type: GraphQLString },
    id: { type: GraphQLInt },
    subtitle: { type: GraphQLString },
    tags: { type: new GraphQLList(TagType) },
    title: { type: GraphQLString }
  })
});

const TagType = new GraphQLObjectType({
  name: "Tag",
  fields: () => ({
    id: { type: GraphQLInt },
    description: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return posts;
      }
    },
    post: {
      type: PostType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return posts.find(post => post.id === args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
