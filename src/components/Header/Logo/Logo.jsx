import React from 'react';
import styles from '../Header.module.scss';
import logo from '../../../assets/img/logo.jpg';

const Logo = (props) => {
  return (
    <div className={styles.imageBlock}>
      <img src={logo} alt='Logo Image' className={styles.header__logo} />
    </div>
  );
};

export default Logo;
