import React from "react";
import Moment from "react-moment";

const Post = ({ post }) => (
  <>
    <article className="post-container">
      <h3>{post.title}</h3>
      <p>{post.subtitle}</p>
      <Moment date={post.date} format="D MMM" />
    </article>
  </>
);

export default Post;
