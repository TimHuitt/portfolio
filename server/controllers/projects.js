const { Project } = require('../models')

const index = async (req, res, next) => {
  try {
    res
      .status(201)
      .send('index')
      // .json(await Project.find({}))
  } catch (err) {
    res.status(400).json({err: err.message})
  }
}

const show = async (req, res, next) => {
  try {
    res
      .status(201)
      .send('show')
      // .json(await Project.findById(req.params.id))
  } catch (err) {
    res.status(400).json({err: err.message})
  }
}

module.exports = {
  index,
  show,
}