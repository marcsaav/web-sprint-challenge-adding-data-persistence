const db = require('../../data/dbConfig')

module.exports = {
    getAll() {
        return db('tasks')
    },
    post(task) {
        return db('tasks')
            .insert(task)
            .then(([task_id]) => {
                return db('tasks')
                    .where('task_id', task_id)
            })
    }
}