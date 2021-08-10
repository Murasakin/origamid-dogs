import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotosSvg } from '../../Assets/feed.svg';
import { ReactComponent as EstatisticasSvg } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFotoSvg } from '../../Assets/adicionar.svg';
import { ReactComponent as SairSvg } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end activeClassName={styles.active}>
        <MinhasFotosSvg />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
        <EstatisticasSvg />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar" activeClassName={styles.active}>
        <AdicionarFotoSvg />
        {mobile && 'Postar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <SairSvg />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
