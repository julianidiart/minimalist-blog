const Post = require("./models/post");
const Tag = require("./models/tag");

const {
  Input,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} = require("graphql");

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLID },
    date: { type: GraphQLString },
    title: { type: GraphQLString },
    subtitle: { type: GraphQLString },
    body: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) }
  })
});

const TagType = new GraphQLObjectType({
  name: "Tag",
  fields: () => ({
    id: { type: GraphQLID },
    description: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return Post.find({});
      }
    },
    post: {
      type: PostType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        return Post.findById(args.id);
      }
    },
    tags: {
      type: new GraphQLList(TagType),
      resolve(parent, args) {
        return Tag.find({});
      }
    },
    tag: {
      type: TagType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        return Tag.findById(args.id);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPost: {
      type: PostType,
      args: {
        date: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        subtitle: { type: GraphQLString },
        body: { type: GraphQLString },
        tags: { type: new GraphQLList(GraphQLString) }
      },
      resolve(parent, args) {
        const { date, title, subtitle, body, tags } = args;
        let post = new Post({
          date,
          title,
          subtitle,
          body,
          tags
        });
        return post.save();
      }
    },
    addTag: {
      type: TagType,
      args: {
        description: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const { description } = args;
        let tag = new Tag({
          description
        });
        return tag.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
