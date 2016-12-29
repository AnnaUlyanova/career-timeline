
exports.up = function(knex, Promise) {
  return knex.schema.createTable('career-steps', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.string('dates')
    table.string('description')
    table.string('type')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('career-steps')
};
