const express = require('express');
const router = express.Router();
const { PostModel } = require('./post.model');

router.get('/', async (req, res) => {
  const posts = await PostModel.find();
  return res.status(200).send({ posts });
});

router.get('/:id', async (req, res) => {
  console.log('params => ', req.params);

  try {
    const data = await PostModel.findById(req.params.id);
    return res.status(200).send({ data });
  } catch (error) {
    return res.status(404).send({ message: 'Not found' });
  }
});

router.post('/', async (req, res) => {
  try {
    const data = await PostModel.create(req.body);
    return res.status(200).send({ data });
  } catch (error) {
    return res.status(406).send({ error });
  }
});

exports.router = router;
