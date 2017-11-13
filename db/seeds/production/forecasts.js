exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE forecasts RESTART IDENTITY')
  .then(function() {
    return Promise.all([
      knex.raw(
        'INSERT INTO forecasts (id, created_at) VALUES (?, ?)',
        [1, new Date]
      ),
      knex.raw(
        'INSERT INTO forecasts (id, created_at) VALUES (?, ?)',
        [2, new Date]
      ),
      knex.raw(
        'INSERT INTO forecasts (id, created_at) VALUES (?, ?)',
        [3, new Date]
      ),
      knex.raw(
        'INSERT INTO forecasts (id, created_at) VALUES (?, ?)',
        [5, new Date]
      ),
      knex.raw(
        'INSERT INTO forecasts (id, created_at) VALUES (?, ?)',
        [6, new Date]
      ),
      knex.raw(
        'INSERT INTO forecasts (id, created_at) VALUES (?, ?)',
        [7, new Date]
      ),
      knex.raw(
        'INSERT INTO forecasts (id, created_at) VALUES (?, ?)',
        [8, new Date]
      ),
      knex.raw(
        'INSERT INTO forecasts (id, created_at) VALUES (?, ?)',
        [9, new Date]
      ),
      knex.raw(
        'INSERT INTO forecasts (id, created_at) VALUES (?, ?)',
        [10, new Date]
      ),
      knex.raw(
        'INSERT INTO forecasts (id, created_at) VALUES (?, ?)',
        [11, new Date]
      ),
      knex.raw(
        'INSERT INTO forecasts (id, created_at) VALUES (?, ?)',
        [12, new Date]
      ),
      knex.raw(
        'INSERT INTO forecasts (id, created_at) VALUES (?, ?)',
        [13, new Date]
      ),

    ])
  })
}
