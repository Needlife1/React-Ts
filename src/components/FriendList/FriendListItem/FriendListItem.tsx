import { FriendType } from "../../../../types/Friend.types";

export const FriendsListItem: React.FC<{ friend: FriendType }> = ({
  friend,
}) => {
  const { avatar, name, isOnline } = friend;

  return (
    <>
      <li className="item">
        <span className={isOnline ? "status-true" : "status-false"}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    </>
  );
};
