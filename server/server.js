// for starting with express
const express = require('express'),
      app = express(),
      graphqlHTTP = require('express-graphql'),
      Schema = require('./schema.js'),
      path = require('path'),
      cors = require('cors'),
      port = 8000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/issue', {
  useMongoClient: true
});

const notFoundError = (err, req, res, next) => {
  if(err.status == 404) {
    err.message = 'Not Found';
    res.status(404).send(err);
  } else next(err);
};

app.use(cors());

app.use('/api', graphqlHTTP({
  schema: Schema,
  graphiql: true
}));

// set up the router
app.listen(port, () => {
  console.log(`server started on ${port}`);
});
