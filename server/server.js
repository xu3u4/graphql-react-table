// for starting with express
const express = require('express'),
      app = express(),
      graphqlHTTP = require('express-graphql'),
      Schema = require('./schema.js'),
      path = require('path'),
      cors = require('cors'),
      // routes = require('./routes.js'),
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
// app.use('/api', routes);
// app.get('*', function(req, res, next) {
//   var err = new Error();
//   err.status = 404;
//   next(err);
// });

// app.use(notFoundError);
// app.use((err, req, res, next) => {
//   res.status(500).send({
//     error: err,
//     message: 'Internal error!'
//   });
// });




app.use('/api', graphqlHTTP({
  schema: Schema,
  graphiql: true
}));

// set up the router
app.listen(port, () => {
  console.log(`server started on ${port}`);
});
