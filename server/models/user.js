const { mongoose } = require('../db/mongoose');

const UserModel = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlenght: 1
  }
});

module.exports = { UserModel };