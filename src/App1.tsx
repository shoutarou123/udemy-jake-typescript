import axios from 'axios'
import { useState } from 'react'
import { Todo } from './Todo';
import { TodoType } from "./types/todo"
import { Text } from './Text';
import { UseProfile } from './UseProfile';
import { User } from './types/user';

const user: User = {
  name: "hoge",
  hobbies: ["ゲーム", "読書"]
}

export default function App1 () {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  }
  return (
    <div className="App">
      <UseProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
       <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  );
}
