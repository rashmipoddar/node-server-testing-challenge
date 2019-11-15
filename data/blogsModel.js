const db = require('./dbConfig');

const add = (blog) => {
  return db('blogs').insert(blog)
    .then(([id]) => {
      return db('blogs').where({id}).first()
    })
};

const get = () => {
  return db('blogs');
};

const getById = (id) => {
  return db('blogs').where({id}).first();
};

const remove = (id) => {
  return db('blogs').where({id}).del();
};

module.exports = {
  add,
  get,
  getById,
  remove
};