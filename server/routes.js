const express = require('express'),
      router = express.Router(),
      bodyParser = require('body-parser'), //parses information from POST
      path = require('path'),
      Issue = require('./model/issues');
      mongoose = require('mongoose');
mongoose.Promise = Promise;
router.use(bodyParser.json({ extended: true }));

// creat
router.post('/new_issue', (req, res, next) => {
  Issue.find({}).sort('-seq').limit(1).exec()
    .then((doc) => {
      req.body.seq = doc.length === 0 ? 1 : doc[0].seq + 1;
      Issue.create(req.body, (err, data) => {
        if(err) {
          if(err.code=='11001') {
            res.status(400).send(err);
          } else {
            err.status = 404;
            next(err);
          }
        } else {
          res.status(200).send(data);
        }
      });
    }).catch((err) => {
      next(err);
    });
});

// read
router.get('/issues', (req, res) => {
  Issue.find({}, (err, data) => {
    console.log('***Get issues***');
    res.status(200).send(data);
  });
});

// update
router.post('/:id/edit', (req, res, next) => {
  Issue.update({seq: req.params.id}, req.body, (err, data) => {
    if(err) {
      if(err.code=='11001') {
        res.status(400).send(err);
      } else {
        err.status = 404;
        next(err);
      }
    } else {
      res.status(200).send(data);
    }
  });
});

// delete
router.get('/:id/delete', (req, res) => {
  Issue.remove({seq: req.params.id}, (err, data) => {
    if(err) next(err);
    else res.status(200).send(req.params.id);
  });
});

module.exports = router;
