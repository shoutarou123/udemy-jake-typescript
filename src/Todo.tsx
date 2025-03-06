type TodoType = {
  userId: number;
  title: string;
  completed?: boolean; // ? を付けることで必須ではなくなる
}

export const Todo = (props: TodoType) => {
  const {title, userId, completed = false} = props; // completedは必須ではないのでﾃﾞﾌｫﾙﾄの値を指定
  const completeMark = completed ? "【完】" : "【未】";
  return (
    <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>
  )
}
