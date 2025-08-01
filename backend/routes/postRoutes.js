const express = require('express');
const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} = require('../controllers/postController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPost);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

module.exports = router;
