const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts_controller');

router.get('/name',postsController.name);
// router.post('/create',postsController.create);

module.exports = router;
