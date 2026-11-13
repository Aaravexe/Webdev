const router = require('express').Router();
const controller = require('../controllers/postController');
const { protect } = require('../middleware/auth');

router.route('/').get(controller.getPosts).post(protect, controller.createPost);
router.route('/:id').get(controller.getPost).patch(protect, controller.updatePost).delete(protect, controller.deletePost);

module.exports = router;
