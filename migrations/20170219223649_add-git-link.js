exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('projects', function (table) {
      table.string('git')
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('projects', function (table) {
      table.dropColumn('git')
    })
  ])
}
