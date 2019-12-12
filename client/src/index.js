import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./styles/styles.scss";
import MinimalistBlog from "./pages/MinimalistBlog";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

const app = (
  <ApolloProvider client={client}>
    <MinimalistBlog />
  </ApolloProvider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
