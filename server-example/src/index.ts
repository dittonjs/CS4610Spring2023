import express from "express";

const app = express();

type Todo = {
  id: number
  description: string
  isCompleted: boolean
}

let id = 0;
const todos: Todo[] = [];

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`)
  next();
});

app.use(express.json())

type TodosPostBody = {
  description: string
}

app.post('/todos', (req, res) => {
  console.log("I AM IN THE ENDPOINT")
  const { description } = req.body as TodosPostBody;
  const todo: Todo = {
    id: id++,
    description,
    isCompleted: false
  }
  todos.push(todo);
  res.json({ todo });
});

app.get('/todos', (req, res) => {
  // go to database first
  res.json(todos);
});
//PUT https://localhost:3000/todos/10
//PUT .../todos/asdf

type UpdateTodoBody = {
  isCompleted: boolean,
}

app.put('/todos/:id', (req, res) => {
  const {isCompleted} = req.body as UpdateTodoBody;

  if (isCompleted === undefined) {
    res.status(400).json({message: "Bad" });
  }

  const todo = todos.find(t => t.id === parseInt(req.params.id))
  if (!todo) {
    res.status(404).json({message: "Todo not found" });
    return;
  } else {
    todo.isCompleted = isCompleted;

    res.json({ todo });
  }
})



app.get("/", (req, res) => {
  res.send(`<h1>Hello, world!</h1>`);
});

app.listen(3000, () => {
  console.log("I got started!");
});