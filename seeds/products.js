exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('products').del(),
    knex('products').insert({
        name: 'Not Aaron',
        price: 1000
      }),
    knex('products').insert({
        name: 'Half of Aaron',
        price: 5
      }),
    knex('products').insert({
        name: 'Aaron',
        price: 20
    })
   )
}
