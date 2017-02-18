exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('projects', function (table) {
      table.string('tech')
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('projects', function (table) {
      table.dropColumn('tech')
    })
  ])
}
