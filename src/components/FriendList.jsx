import PropTypes from 'prop-types';

import FriendsListItem from './FriendListItem';
export default function Friends({ friends }) {
    return (<div className = "friend-container" >
        <ul className={"friend-list"}>{friends.map(FriendsListItem)}</ul>       
        </div>)     
}


Friends.propTypes = {
   friends: PropTypes.array.isRequired,
}
