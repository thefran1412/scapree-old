const Room = require('../../../models/Room.js')

module.exports = function (req, res) {
  const {id} = req.params
  Room.findById(id)
    .then(tasks => res.json(tasks))
    .catch(err => console.log(err))
}
