const express = require('express')

const router = express.Router()

const Project = require('./model')

router.get('/', async (req, res) => {
    try {
        const data = await Project.getAll()
        res
            .status(200)
            .json(data)
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
        res
            .status(200)
            .json(newPost)
    }
    catch(err) {
        res
            .status(500)
            .json({message: err.message})
    }
})

module.exports = router
