import Profile from './Profile'
import StatisticsList from './StatisticsList'
import FriendList from './FriendList'
import TransactionTable from './Transaction-table'
import PropTypes from 'prop-types';


export default function App() {
    return <>
        <Profile></Profile>
        <StatisticsList></StatisticsList>
        <FriendList></FriendList>
        <TransactionTable></TransactionTable>
    </>
}

App.propTypes = {
    Profile: PropTypes.func,
    StatisticsList: PropTypes.func,
    FriendList: PropTypes.func,
    TransactionTable: PropTypes.func,
}