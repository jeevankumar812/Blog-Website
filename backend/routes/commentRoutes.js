const express = require('express');
const {
  createComment,
  getCommentsByPost,
} = require('../controllers/commentController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', auth, createComment);
router.get('/:postId', getCommentsByPost);

module.exports = router;
