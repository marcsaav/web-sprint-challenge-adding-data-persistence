
exports.up = function(knex) {
    return knex.schema
                .createTable('projects', (table) => {
                    table.increments('project_id')
                    table.string('name', 128).notNullable()
                    table.string('description')
                    table.boolean('completed').notNullable().defaultTo('false')
                })
                .createTable('resources', (table) => {
                    table.increments('resource_id')
                    table.string('name', 128).notNullable().unique()
                    table.string('description')
                })
                .createTable('tasks', (table) => {
                    table.increments('task_id')
                    table.string('description', 128).notNullable()
                    table.string('notes')
                    table.boolean('completed').notNullable().defaultTo('false')
                    table.integer('project_id')
                            .unsigned()
                            .notNullable()
                            .references('project_id').inTable('projects')
                            .onDelete('CASCADE').onUpdate('CASCADE')
                })
};

exports.down = function(knex) {
  return knex.schema
            .dropTableIfExists('tasks')
            .dropTableIfExists('resources')
            .dropTableIfExists('projects')

};
