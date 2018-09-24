const express = require('express')
const bodyParser = require('body-parser')
const { ObjectID } = require('mongodb')

const { mongoose } = require('./db/mongoose.js')
const { TodoModel } = require('./models/todo')
const { UserModel } = require('./models/user')

const app = express()

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  const todo = new TodoModel({
    text: req.body.text
  })

  todo.save().then((doc) => {
    res.send(doc)
  }).catch((e) => {
    res.status(400).send(e)
  })
})

app.get('/todos', (req, res) => {
  TodoModel.find().then((todos) => {
    res.send({ todos})
  }).catch(err => {
    res.status(400).send(err)
  })
})

app.get('/todos/:id', (req, res) => {
  const { id } = req.params

  if (!ObjectID.isValid(id)) {
    res.status(404).send({})
  } else {
    TodoModel.findById(id)
      .then((todo) => {
        if (!todo) {
          res.status(404).send({})
        }
        res.send({ todo})
      })
      .catch(err => res.status(400).send(err))
  }
})

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params

  if (!ObjectID.isValid(id)) {
    res.status(404).send({})
  } else {

    TodoModel.findByIdAndRemove(id)
      .then((todo) => {
        if (!todo) {
          res.status(404).send({})
        }
        res.send({ todo})
      })
      .catch(err => res.status(400).send(err))
  }
})

app.listen(3000, () => {
  console.log('Started on port 3000')
})

module.exports = { app}
