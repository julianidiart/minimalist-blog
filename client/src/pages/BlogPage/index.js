import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Post from "../../components/Post";
import Loading from "../../components/Loading";

const POSTS_QUERY = gql`
  query PostsQuery {
    posts {
      id
      date
      title
      subtitle
    }
  }
`;

const BlogPage = () => {
  return (
    <div>
      <Query query={POSTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) console.log(error);
          const posts = data.posts.map(post => (
            <Post key={post.id} post={post} />
          ));
          return posts;
        }}
      </Query>
    </div>
  );
};

export default BlogPage;
