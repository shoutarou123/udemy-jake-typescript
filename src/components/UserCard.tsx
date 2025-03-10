import { UserProfile } from "../types/userProfiles"

type Props = {
  user: UserProfile;
  
}

export const UserCard: React.FC<Props> = (props) => {
  const { user } = props;

  const style1 = {
    border: "solid 1px #ccc",
    borderRadius: "8px",
    padding: "0 16px",
    margin: "8px"

  }

  return (
    <div style={style1}>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  )
}
