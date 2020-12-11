
exports.up = function(knex) {
    return knex.schema
                .createTable('projects', (table) => {
                    table.increments('project_id')
                    table.string('project_name', 128).notNullable()
                    table.string('project_description')
                    table.boolean('completed').notNullable().defaultTo(0)
                })
                .createTable('resources', (table) => {
                    table.increments('resource_id')
                    table.string('resource_name', 128).notNullable()
                    table.string('resource_description')
                })
                .createTable('tasks', (table) => {
                    table.increments('task_id')
                    table.string('task_description', 128).notNullable()
                    table.string('tasl_notes')
                    table.boolean('completed').notNullable().defaultTo(0)
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
