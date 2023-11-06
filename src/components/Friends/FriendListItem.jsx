import css from './Friends.module.css';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={css.friends__item}>
      <span className={`${css.friends__status} ${css[isOnline]}`}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.friends__name}>{name}</p>
    </li>
  );
};
