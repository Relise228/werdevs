import React, {useState} from 'react';
import styles from './HomePage.module.scss';
import Calendar from 'react-calendar';
import './Calendar.scss';
import Modal from './Modal/Modal';

const HomePage = ({chosenDate, setChosenDate, day, month}) => {
  const [showModal, setShowModal] = useState(false);

  const onChange = (date) => {
    setChosenDate(date);
    setShowModal(true);
    console.log(chosenDate.toString());
  };

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
      <div className={styles.home__mainRight}>
        <Calendar value={chosenDate} onChange={onChange} />
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal} day={day} month={month} />
      )}
    </div>
  );
};

export default HomePage;
