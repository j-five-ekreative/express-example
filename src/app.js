const express = require('express');
const mongoose = require('mongoose');
const { router: postsRouter } = require('./posts/routes');
mongoose
  .connect('mongodb://0.0.0.0:27018/D_example', { useNewUrlParser: true })
  .then((host) => {
    console.log(
      'Db connected => ',
      host.connection.host + ':' + host.connection.port
    );
  });

const app = express();

app.use(express.json());
app.use('/posts', postsRouter);

exports.app = app;
