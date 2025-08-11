import clsx from 'clsx';
import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={clsx(css.card)}>
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
        </div>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
