// for starting with express
const express = require('express'),
      app = express(),
      path = require('path'),
      cors = require('cors'),
      routes = require('./routes.js'),
      port = 8000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/issue');

const notFoundError = (err, req, res, next) => {
  if(err.status == 404) {
    err.message = 'Not Found';
    res.status(404).send(err);
  } else next(err);
};

app.use(cors());
app.use('/api', routes);
app.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});

app.use(notFoundError);
app.use((err, req, res, next) => {
  res.status(500).send({
    error: err,
    message: 'Internal error!'
  });
});

// set up the router
app.listen(port, () => {
  console.log(`server started on ${port}`);
});
