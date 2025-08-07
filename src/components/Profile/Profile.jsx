import clsx from 'clsx';
import css from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({
  name,
  tag,
  location,
  image = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats: { followers, views, likes },
}) => {
  return (
    <div className={clsx(css.profile)}>
      <div className={clsx(css.description)}>
        <img className={clsx(css.avatar)} src={image} alt="User avatar" />
        <p className={clsx(css.name)}>{name}</p>
        <p className={clsx(css.tag)}>@{tag}</p>
        <p className={clsx(css.location)}>{location}</p>
      </div>
      <ul className={clsx(css.stats)}>
        <li>
          <span className={clsx(css.label)}>Followers</span>
          <span className={clsx(css.quantity)}>{followers}</span>
        </li>
        <li>
          <span className={clsx(css.label)}>Views</span>
          <span className={clsx(css.quantity)}>{views}</span>
        </li>
        <li>
          <span className={clsx(css.label)}>Likes</span>
          <span className={clsx(css.quantity)}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
