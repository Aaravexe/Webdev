const Post = require('../models/Post');

async function createPost(req, res, next) {
  try {
    const post = await Post.create({ ...req.body, author: req.user.id });
    res.status(201).json({ post });
  } catch (error) { next(error); }
}

async function getPosts(req, res, next) {
  try {
    const posts = await Post.find().populate('author', 'name email').sort({ createdAt: -1 });
    res.json({ count: posts.length, posts });
  } catch (error) { next(error); }
}

async function getPost(req, res, next) {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'name email');
    if (!post) return res.status(404).json({ message: 'Post not found.' });
    res.json({ post });
  } catch (error) { next(error); }
}

async function updatePost(req, res, next) {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found.' });
    if (post.author.toString() !== req.user.id) return res.status(403).json({ message: 'You can update only your own posts.' });
    if (req.body.title !== undefined) post.title = req.body.title;
    if (req.body.content !== undefined) post.content = req.body.content;
    await post.save();
    res.json({ post });
  } catch (error) { next(error); }
}

async function deletePost(req, res, next) {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found.' });
    if (post.author.toString() !== req.user.id) return res.status(403).json({ message: 'You can delete only your own posts.' });
    await post.deleteOne();
    res.json({ message: 'Post deleted.' });
  } catch (error) { next(error); }
}

module.exports = { createPost, getPosts, getPost, updatePost, deletePost };
