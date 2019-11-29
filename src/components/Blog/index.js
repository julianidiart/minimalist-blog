import React, { useState } from "react";
import Post from "../Post";

const Blog = () => {
  const [posts] = useState([
    {
      date: "01/01/1901",
      subtitle: "This is a blog post subtitle",
      title: "Blog post #1"
    },
    {
      date: "02/02/1902",
      subtitle: "This is another blog post subtitle",
      title: "Blog post #2"
    },
    {
      date: "03/03/1903",
      subtitle: "Third blog post subtitle",
      title: "Blog post #3"
    },
    {
      date: "04/04/1904",
      subtitle: "Last blog post subtitle",
      title: "Blog post #4"
    }
  ]);
  return (
    <div>
      <h3>posts</h3>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Blog;
