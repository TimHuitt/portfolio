const { Project } = require('../models')

const index = async (req, res, next) => {
  try {
    res
      .status(201)
      .json(await Project.find({}))
  } catch (err) {
    res.status(400).json({err: err.message})
  }
}

const show = async (req, res, next) => {
  try {
    res
      .status(201)
      .json(await Project.findById(req.params.id))
  } catch (err) {
    res.status(400).json({err: err.message})
  }
}

const create = async (req, res, next) => {
  try {
    res
      .status(201)
      .json(await Project.create(req.body))
  } catch (err) {
    res.status(400).json({err: err.message})
  }
}

module.exports = {
  index,
  show,
  create,
}