import { TodoType } from "./types/todo";

export const Todo = (props: Pick<TodoType, "userId" | "title" | "completed">) => { // Pickで型から必要なものだけ抜き出している
  const {title, userId, completed = false} = props; // completedは必須ではないのでﾃﾞﾌｫﾙﾄの値を指定
  const completeMark = completed ? "【完】" : "【未】";
  return (
    <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>
  )
}
