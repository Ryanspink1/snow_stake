
exports.up = function(knex, Promise) {
  let createResorts = `CREATE TABLE resorts(
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT,
    snowstake_url TEXT,
    open_snow_id TEXT,
    created_at TIMESTAMP
  )`
   return knex.raw(createResorts)
};

exports.down = function(knex, Promise) {
  let dropResorts = `DROP TABLE resorts`
    return knex.raw(dropResorts)
};
