import Profile from './Profile'
import Statistics from './Statistics'
import FriendItem from './FriendItem'
import TransactionItem from './Transaction-item'
import user from '../json-files/user.json'
import statisticalData from '../json-files/statistical-data.json'
import friends from '../json-files/friends.json';
import transactions from '../json-files/transactions.json'
export default function App() {
    return <>
        <Profile name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
        ></Profile>
        <Statistics title="Upload stats" stats={statisticalData} 
        ></Statistics>
        <FriendItem friends={friends}></FriendItem>
        <TransactionItem transactions={transactions}></TransactionItem>
    </>
}

