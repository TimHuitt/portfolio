const express = require('express')
const router = express.Router()

const projectsCtrl = require('../controllers/projects')

// GET projects - index
router.get("/", projectsCtrl.index);

// GET projects/:id - show
router.get('/:id', projectsCtrl.show);

module.exports = router