const router = require('express').Router();

const Blogs = require('./blogsModel');

router.get('/', (req, res) => {
  Blogs.get()
    .then(blogs => {
      res.status(200).send(blogs);
    })
    .catch(error => {
      res.status(500).send('There was an error in getting blogs from the database');
    })
});

router.post('/', (req, res) => {
  const blog = req.body;

  Blogs.add(blog)
    .then(blogAdded => {
      res.status(201).send(blogAdded);
    })
    .catch(err => {
      res.status(500).send({message: 'The blog could not be added.'});
    })
});

module.exports = router;
