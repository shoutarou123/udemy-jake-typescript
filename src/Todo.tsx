import { TodoType } from "./types/todo";

export const Todo = (props: Omit<TodoType, "id">) => { // Omitで型から不要なものだけ取り除いている
  const {title, userId, completed = false} = props; // completedは必須ではないのでﾃﾞﾌｫﾙﾄの値を指定
  const completeMark = completed ? "【完】" : "【未】";
  return (
    <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>
  )
}
