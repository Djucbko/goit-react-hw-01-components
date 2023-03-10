import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions  from "../data/transactions.json";
import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics"
import { FriendList } from "components/FriendList/FriendList"
import { TransactionHistory } from "components/Transactions/Transactions";


export const App = () => {
  return (
    <div
      style={{
        height: '330vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  
  );
};