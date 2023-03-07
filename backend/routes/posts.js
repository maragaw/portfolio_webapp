//server.js creates routes using get request handler, post request handler, etc
//no access to the express app in this file, so need to use express router

const express = require('express')
const Post = require('../models/postModel')
const { //pull in controller functions to use for these routes
    createPost,
    getPosts,
    getPost,
    deletePost,
    updatePost
} = require('../controllers/postController')
const router = express.Router() //express router
//GET all posts
router.get('/', getPosts)
//GET a single post
router.get('/:id', getPost)
//POST a new post
router.post('/', createPost)
//DELETE a post
router.delete('/:id', deletePost)
//UPDATE a post
router.patch('/:id', updatePost)
//export router
module.exports = router