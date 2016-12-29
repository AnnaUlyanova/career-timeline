
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('project_url')
    table.string('image_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
};
