import React from 'react';
import styles from './Header.module.scss';
import Wrapper from '../Wrapper/Wrapper';
import {NavLink} from 'react-router-dom';
import Logo from './Logo/Logo';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <Wrapper>
        <div className={styles.header__wrapper}>
          <Logo />
          <div className={styles.navigationBlock}>
            <NavLink
              to='/'
              className={styles.header__navLink}
              activeClassName={styles.active}
            >
              HOME
            </NavLink>
            <NavLink
              to='/about'
              className={styles.header__navLink}
              activeClassName={styles.active}
            >
              ABOUT US
            </NavLink>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
