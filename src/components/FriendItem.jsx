import PropTypes from 'prop-types';
import defaultImg from '../images/default-thumbnail.jpg'

export default function Friends({friends}) { 
    return (<div className="friend-container">
    <ul className="friend-list">
            {friends.map(friend => {
                const { id, avatar = defaultImg, name, isOnline } = friend;
                return <li key={id} className="item">
                    {isOnline ? <span className="status-online"></span> : <span className="status-offline"></span>}
                    <img className="avatar" src={avatar ?? defaultImg} alt={name} width="48" />
                    <p className="name">{name}</p>
                </li>
            })}
        </ul>
        </div>)     
}
Friends.propTypes = {
   friends: PropTypes.arrayOf(
    PropTypes.shape({
     id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    }),
  ),    
}
