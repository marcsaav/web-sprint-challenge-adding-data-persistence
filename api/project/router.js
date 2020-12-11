const express = require('express')

const router = express.Router()

const Project = require('./model')

router.get('/', async (req, res) => {
    try {
        const data = await Project.getAll()
        const newData = data.map((project) => {
            const integer = project.completed
            const boolean = integer === 1 ? true : false
            return {...project, completed: boolean}
        })
        res
            .status(200)
            .json(newData)
    }
    catch(err) {
        res
            .status(500)
            .json({message: err.message})
    }
})

router.post('/', async (req, res) => {
    try {
        const newPost = await Project.post(req.body)
        const newerPost = newPost.map((post) => {
            const integer = post.completed
            const boolean = integer === 1 ? true : false
            return {...post, completed: boolean}
        })
        res
            .status(200)
            .json(newerPost)
    }
    catch(err) {
        res
            .status(500)
            .json({message: err.message})
    }
})

module.exports = router
