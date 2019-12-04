const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB database");
});

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(keys.port, () => console.log(`Server started on port ${keys.port}`));
