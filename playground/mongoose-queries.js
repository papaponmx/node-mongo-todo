const { ObjectID } = require('mongodb')
const { mongoose } = require('../server/db/mongoose');
const { TodoModel } = require('../server/models/todo')
const { UserModel } = require('../server/models/user')

// const id = '5ba7d34ec912b4773b046017';
const userID = '5b94660f4d889f1e9d296b88';
// const userID = '5b94660f4d889f1e9d296b88';


if(!ObjectID.isValid(userID)) {
  console.log('User ID is no valid')
} else {
  UserModel.findById(userID)
  .then(user => {
    if (!user) { console.log('User not found') }
    console.log('User is ', user)
  }).catch((err) => console.log(err))
}



if (!ObjectID.isValid(id)) {
 console.log('ID not valid');
}

TodoModel.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
})

TodoModel.findOne({
  _id: id
})
.then((todo) => {
  console.log('Todos', todo);
})

TodoModel.findById(id)
.then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todos', todo);
})
.catch(e => console.log(e));
 
