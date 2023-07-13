const mongoose = require("mongoose")

const Post = require("../models/posts.js")

// get all posts
const getPosts = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });

  res.status(200).json(posts);
};

// get a single post
const getPost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Post not found"})
    }

  const post = await Post.findById(id);

    if(!post) {
        return res.status(404).json({error: "Post not found"})
    }

  res.status(200).json(post);
};

// create a new post
const createPost = async (req, res) => {
  const { title, body } = req.body;

  try {
    const post = await Post.create({ title, body });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a post

const deletePost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Post not found"})
    }

    const post = await Post.findOneAndDelete({_id: id})

    if(!post) {
        return res.status(400).json({error: "Post not found"})
    }

    res.status(200).json(post)
}

// update a post

const updatePost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Post not found"})
    }

    const post = await Post.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!post) {
        return res.status(400).json({error: "Post not found"})
    }

    res.status(200).json(post)
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    deletePost,
    updatePost
}