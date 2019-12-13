import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Post from "../../components/Post";

const PostPage = () => {
  const { id } = useParams();
  const POST_QUERY = gql`
  query PostQuery {
    post(id: "${id}") {
      id
      date
      title
      subtitle
    }
  }
`;

  return (
    <Query query={POST_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) console.log(error);
        return <Post key={data.post.id} post={data.post} />;
      }}
    </Query>
  );
};

export default PostPage;
