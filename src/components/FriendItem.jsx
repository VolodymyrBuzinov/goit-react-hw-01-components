import PropTypes from 'prop-types';
import friends from '../json-files/friends.json';
import defaultImg from '../images/default-thumbnail.jpg'



export default function Friends() {
    return friends.map(friend => {
        const { id, avatar = defaultImg, name, isOnline } = friend;
        return <li key={id} className="item">
          {isOnline ? <span className="status-online"></span>:  <span className="status-offline"></span>}          
  <img className="avatar" src={avatar ?? defaultImg} alt={name} width="48" />
            <p className="name">{name}</p>
</li>      
    })
}
Friends.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}
