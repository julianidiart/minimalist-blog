import React from "react";

const Post = ({ post }) => (
  <>
    <article className="post-container">
      <div className="post-container--title">
        <p>{post.title}</p>
        <span>{post.date}</span>
      </div>
      <p className="post-container--subtitle">{post.subtitle}</p>
    </article>
  </>
);

export default Post;
