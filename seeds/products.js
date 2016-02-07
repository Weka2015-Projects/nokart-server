exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('products').del(),
    knex('products').insert({
        name: 'Not Aaron',
        price: 1000,
        created_at: new Date(),
        updated_at: new Date()
      }),
    knex('products').insert({
        name: 'Half of Aaron',
        price: 5,
        created_at: new Date(),
        updated_at: new Date()
      }),
    knex('products').insert({
        name: 'Aaron',
        price: 20,
        created_at: new Date(),
        updated_at: new Date()
    })
   )
}
