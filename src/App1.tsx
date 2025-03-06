import axios from 'axios'
import { useState } from 'react'
import { Todo } from './Todo';
import { TodoType } from "./types/todo"
import { Text } from './Text';
import { UseProfile } from './UseProfile';
import { User } from './types/user';
import { UserCard } from './components/UserCard';
import { useAllUsers } from './hooks/useAllUsers';

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

  const { getUsers, userProfiles, loading, error } = useAllUsers(); // カスタムフックから取り出す関数、state

  const onClickFetchUserData = () => getUsers(); // クリックするとカスタムフックの処理が実行される

  return (
    <div className="App">
      <UseProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      <br />
      {todos.map((todo) => (
       <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
      <button onClick={onClickFetchUserData}>usersデータ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
        {userProfiles.map((user1) => (
        <UserCard key={user1.id} user={user1} />
      ))}
        </>
      )}
    </div>
  );
}

// カスタムフックをコンポーネント側から呼び出すと、それぞれ関数やstateを受け取ることでコンポーネント側でそれらを使うことでできる。
// カスタムフックで呼び出したstateはそれぞれのコンポーネントで独立になるので、
// このコンポーネント以外で同じカスタムフックを使用しても、コンポーネント間でstateが競合することはない。
// なので便利な純粋な処理とstateを提供するものとなる。