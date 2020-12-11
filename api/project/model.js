const db = require('../../data/dbConfig')

module.exports = {
    getAll() {
        return db('projects')
    },
    post(project) {
        return db('projects')
            .insert(project)
            .then(([project_id]) => {
                return db('projects')
                    .where('project_id', project_id)
            })
    }
}
