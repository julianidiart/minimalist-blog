import React, { useState } from "react";
import Post from "../Post";

const Blog = () => {
  const [posts] = useState([
    {
      date: "Jan 1",
      subtitle: "This is a blog post subtitle",
      title: "Blog post #1"
    },
    {
      date: "Jul 7",
      subtitle: "This is another blog post subtitle",
      title: "Blog post #2"
    },
    {
      date: "Dec 24",
      subtitle: "Third blog post subtitle",
      title: "Blog post #3"
    },
    {
      date: "May 2",
      subtitle: "Last blog post subtitle",
      title: "Blog post #4"
    }
  ]);
  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Blog;
