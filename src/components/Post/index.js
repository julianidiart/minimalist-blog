import React from "react";

const Post = ({ post }) => (
  <>
    <article className="post-container">
      <p className="post-title">{post.title}</p>
      <p className="post-subtitle">{post.subtitle}</p>
      <span>{post.date}</span>
    </article>
  </>
);

export default Post;
