const db = require('./dbConfig');

const add = (blog) => {
  return db('blogs').insert(blog)
    .then(([id]) => {
      return db('blogs').where({id}).first()
    })
};

const get = () => {

};

const getById = (id) => {

};

module.exports = {
  add,
  get,
  getById
};