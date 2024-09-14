const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    username: String,
    password: String,
    email: String
})

const Todo = new Schema({
    description: String,
    done: Boolean
})

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos',Todo);

module.exports = {
  UserModel,
  TodoModel 
};