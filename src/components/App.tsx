import { User } from "./Profile/Profile";
import user from "../Data/user.json";

import { Statistics } from "./Statistics/Statistics";
import data from "../Data/data.json";

import { FriendList } from "./FriendList/FriendList";
import friends from "../Data/friends.json";

import { TransactionHistory } from "./Transactions/TransactionHistory";
import transactions from "../Data/transactions.json";

function App() {
  return (
    <>
      <User user={user} />
      <Statistics title="Upload stats" state={data} />
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />
    </>
  );
}

export default App;
