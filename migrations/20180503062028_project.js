exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', function(table) {
    table.increments();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.decimal("namespace_id")
    table.string("name");
    table.integer("m2");
    table.text("description");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('project');
};
