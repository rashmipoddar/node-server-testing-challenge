
exports.up = function(knex) {
  return knex.schema.createTable('blogs', tbl => {
    tbl.increments();
    tbl.string('title', 128).notNullable();
    tbl.string('author', 64);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('blogs');
};
