import React from 'react';
import styles from './HomePage.module.scss';
import bg from '../../assets/img/bg.png';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__mainLeft}>
        <p className={styles.home__title}>
          Choose the day <br />
          for the meeting
        </p>
        <p className={styles.home__subTitle}>
          We encourage you to book your
          <br /> appointment online.
          <br /> This will save you time.
        </p>
      </div>
      <div className={styles.home__mainRight}>CALENDAR</div>
    </div>
  );
};

export default HomePage;
