const expect = require('expect');
const request = require('supertest');

const { app } = require('../server');
const { TodoModel } = require('../models/todo');

const initialTodos = [
  { text: 'First Initial Todo'},
  { text: 'Second Initial Todo'}
]

beforeEach(done => {
 TodoModel.deleteMany({})
   .then(()=> TodoModel.insertMany(initialTodos))
   .then(() => done())
   .catch(err => done(err))
})

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    const text = 'Test todo';

    request(app)
      .post('/todos')
      .send({ text })
      .expect(200)
      .expect(res => {
        expect(res.body.text).toBe(text)
      })
      .end((err, res) => {
        if (err) {
          done(err);
        }

        TodoModel.find({ text }).then(todos => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch(e => done(e));
      });
  });

  it('should not create a TODO with invalid body data', (done) => {
    request(app)
     .post('/todos')
     .send({})
     .expect(400)
     .end((err, res) => {
       if (err) {
         return done(err);
       }
       TodoModel.find().then((todos) => {
         expect(todos.length).toBe(2);
         done();
       }).catch(err => done(err));
     })
  });
});


describe('GET /todos', () => {
  it('Should get all todos', (done) => {
    request(app)
    .get('/todos')
    .expect(200)
    .expect(res => {
      expect(res.body.todos.length).toBe(2)
    })
    .end(done)
  });
});