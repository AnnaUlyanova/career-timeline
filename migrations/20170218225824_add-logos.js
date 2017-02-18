exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('career-steps', function (table) {
      table.string('logo')
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('career-steps', function (table) {
      table.dropColumn('logo')
    })
  ])
}
