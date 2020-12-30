import PropTypes from 'prop-types';
import defaultImg from '../images/default-thumbnail.jpg'

export default function FriendsListItem({ avatar = defaultImg, name, id, isOnline }) {
    return (<li key={ id } className = "item">                   
                    <span className={isOnline ? "status-online" : "status-offline"}></span>
                    <img className="avatar" src={avatar ?? defaultImg} alt={name} width="48" />
                    <p className="name">{name}</p>
                </li>    
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};