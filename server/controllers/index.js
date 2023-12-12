const index = async (req, res, next) => {
  try {
    res
      .status(201)
      .send('main index')
  } catch (err) {
    res.status(400).json({err: err.message})
  }
}


module.exports = {
  index,
}