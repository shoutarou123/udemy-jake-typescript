import React from "react"
import { User } from "./types/user"

type Props = {
  user: User;
}

export const UseProfile: React.FC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(" / ")}</dd> {/* ?:ｵﾌﾟｼｮﾅﾙﾁｪｰﾝ joinを使うことで( / )を連結し配列で返すことになる */}
    </dl>

  )
}

// オプショナルチェーン
// .でつなげていく場合、要素が無い場合にundefinedを返すもの