const Room = require('../../../models/Room.js')

module.exports = function (req, res) {
  Room.find({visible: true})
    .then(tasks => res.json(tasks))
    .catch(err => console.log(err))
}
