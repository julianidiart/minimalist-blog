import React from "react";
import { Route } from "react-router-dom";
import BlogPage from "../../pages/BlogPage";
import PostPage from "../../pages/PostPage";

const Main = () => (
  <main>
    <Route exact path="/" component={BlogPage} />
    <Route exact path="/:id" component={PostPage} />
  </main>
);

export default Main;
