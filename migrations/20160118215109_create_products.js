exports.up = function(knex, Promise) {
  return knex.schema.dropTableIfExists('products').then(function () {
    return knex.schema.createTable('products', function (table) {
      table.increments()
      table.string('name')
      table.integer('price')
      table.timestamps()
    })
  }).then(function () {
   console.log('Product table was created.')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('products').then(function () {
   console.log('Product table was dropped.')
  })
}
