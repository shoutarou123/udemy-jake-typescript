// 全ユーザー一覧を取得するカスタムフック

import { useState } from "react";
import { UserProfile } from "../types/userProfiles";
import axios from "axios";
import { AxiosUser } from "../types/axiosUser";

export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getUsers = () => {
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
  
  // stateの情報とgetUsersを他のコンポーネントから使えるようにreturnで返していってあげる。カスタムフックでretrunで返す方法は配列で返す方法とオブジェクトで返す方法と2通りある。
  return  { getUsers, userProfiles, loading, error }  
};

// トリガーとなるgetUsersという関数。この中でaxiosを呼んで、データを取得して、stateを更新していくような処理を書くことで、
// 呼び出したコンポーネント側からgetUsersを呼べばstateが更新されて返ってくる。という形でカスタムフックの中にstateを隠蔽できる。
// カスタムフック化自体は簡単。use✖✖✖で関数を作成して、
// これまでコンポーネントでもっていた必要なstateと実際のAPI実行のところをもってきて、それらをreturnして使えるようにしていく流れになる