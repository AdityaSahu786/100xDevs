/* 
  Schema 
  Todo {
    title: string;
    description: string;
    completed: boolean
  }
*/
const mongoose = require("mongoose");
//mongo url handy 
// mongodb url
// .env
mongoose.connect("");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}