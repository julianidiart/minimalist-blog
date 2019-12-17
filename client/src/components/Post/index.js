import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const Post = ({ post }) => (
  <>
    <article className="post-container">
      <Link to={post.id}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.subtitle}</p>
      <Moment unix date={post.date} format="D MMM" />
    </article>
  </>
);

export default Post;
