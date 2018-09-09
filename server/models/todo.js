const Todo = mongoose.model('Todo', {
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