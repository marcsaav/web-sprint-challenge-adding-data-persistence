const db = require('../../data/dbConfig')

module.exports = {
    getAll() {
        return db('resources')
    },
    post(resource) {
        return db('resources')
            .insert(resource)
            .then(([resource_id]) => {
                return db('resources')
                    .where('resource_id', resource_id)
            })
    }
}