import PropTypes from 'prop-types';
import defaultImage from  '../images/default-thumbnail.jpg'
function Profile({ name, tag, location, avatar = defaultImage, stats }) {  
   return  <div className="profile">
  <div className="description">
    <img
      src={avatar ?? defaultImage}
      alt="Аватар пользователя"
      className="avatar"
    />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
    <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
} 


Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,    
    stats:  PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;



