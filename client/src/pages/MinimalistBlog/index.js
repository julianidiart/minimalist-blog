import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../../layout/Header";
import Main from "../../layout/Main";
import Footer from "../../layout/Footer";

const MinimalistBlog = () => (
  <Router>
    <Header />
    <Main />
    <Footer />
  </Router>
);

export default MinimalistBlog;
