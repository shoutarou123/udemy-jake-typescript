import axios from 'axios'
import { useState } from 'react'
import { Todo } from './Todo';
import { TodoType } from "./types/todo"
import { Text } from './Text';
import { UseProfile } from './UseProfile';
import { User } from './types/user';
import { UserCard } from './components/UserCard';
import { UserProfile } from './types/userProfiles';
import { AxiosUser } from './types/axiosUser';

const user: User = {
  name: "hoge",
  hobbies: ["ゲーム", "読書"]
}


export default function App1 () {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  }

  const onClickFetchUserData = () => {
    setLoading(true);
    setError(false);

    axios.get<Array<AxiosUser>>("https://jsonplaceholder.typicode.com/users").then((res) => {
      const data = res.data.map((user) => ({ // axiosで取得した全部の値じゃなく、必要な値だけを取り出す
        id: user.id,
        name: `${user.name}(${user.username})`,
        email: user.email,
        address: `${user.address.city}${user.address.suite}${user.address.street}`
      }))
      setUserProfiles(data);
    })
    .catch(()=> {
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });
  };

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
