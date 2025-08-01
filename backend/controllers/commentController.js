const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCommentsByPost = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId })
      .populate('user', 'name')
      .populate({ path: 'replies', populate: { path: 'user', select: 'name' } });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
