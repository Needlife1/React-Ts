import { FriendType } from "../../../types/Friend.types";
import { FriendsListItem } from "./FriendListItem/FriendListItem";

export const FriendList: React.FC<{ friends: FriendType[] }> = ({
  friends,
}) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendsListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};
