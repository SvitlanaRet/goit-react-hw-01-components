import css from './Friends.module.css';

export const Friends = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.friends__list}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li className={css.friends__item} key={id}>
              <span className={`${css.friends__status} ${css[isOnline]}`}>
                {isOnline}
              </span>
              <img className={css.avatar} src={avatar} alt={name} width="48" />
              <p className={css.friends__name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
