const { mongoose } = require('../db/mongoose.js');

const TodoModel = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  },
});

module.exports = { TodoModel };