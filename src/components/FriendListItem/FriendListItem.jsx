import clsx from 'clsx';
import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
        <li className={clsx(css.item)} key={id}>
            <img src={avatar} alt="Avatar" width="60" />
            <p className={clsx(css.nameFriend)}>{name}</p>
            <p
                className={clsx(
                    css.status,
                    isOnline ? css.onLine : css.offLine
                )}
            >
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </li>
    );
};

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
