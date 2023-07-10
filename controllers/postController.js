const Post = require("../models/posts.js")

// get all posts
const getPosts = async (req, res) => {
    const posts = await Post.find({}).sort({createdAt: -1})

    res.status(200).json(posts)
}

// get a single post
const getPost = async (req, res) => {
    const { id } = req.params

    const post = await Post.findById(id)

    if(!workout) {
        return res.status(404).json({error: "Post not found"})
    }

    res.status(200).json(post)
}

// create a new post
const createPost = async (req, res) => {
    const {title, body} = req.body

    try {
        const post = await Post.create({title, body})
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a post

// update a post


module.exports = {
    getPosts,
    getPost,
    createPost
}