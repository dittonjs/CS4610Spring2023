import { useState, useEffect } from 'react';
import { recordAnalytic } from './lib/recordAnalytic';

let ID_COUNT = 0;

interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [description, setDescription] = useState("");
  const [analyticRecorded, setAnalyticRecorded] = useState(false);

  useEffect(() => {
    if (todos.length === 2 && !analyticRecorded) {
      recordAnalytic();
      setAnalyticRecorded(true);
    }
  }, [todos, analyticRecorded]);

  function saveTodo() {
    if (description === "") return;
    const todo: Todo = {
      id: ID_COUNT++,
      description,
      completed: false
    };
    setTodos([...todos, todo]);
  }

  function toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
    setTodos([...todos]);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={description}
          placeholder="The thing you need to do"
          onChange={e => setDescription(e.target.value)}
        />
        <button onClick={saveTodo}>Save</button>
      </div>
      <div>
        {
          todos.map((todo) => (
            <div key={todo.id}>
              <input checked={todo.completed} type="checkbox" onChange={() => toggleTodo(todo)}/> {todo.description}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
