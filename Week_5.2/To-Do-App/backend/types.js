const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = { // helps to export the zod file 
    createTodo: createTodo,
    updateTodo: updateTodo
}