const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

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

const newTodo = new Todo({
  text: 'Cook veggies',
  completed: true,
  completedAt: new Date()
});

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
  
// }).catch((e) => {
//   console.log('Unable to save todo');
// }); 


const UserModel = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlenght: 1
  }
});

const newUser =  new UserModel({
  email: ' jimboRosso  '
});


newUser.save().then((result) => {
  console.log(result);

}).catch((err) => {
  console.log(err);
  
});;