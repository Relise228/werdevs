import React from 'react';
import InputComponent from './InputComponent/InputComponent';
import styles from './Modal.module.scss';

const Modal = ({setShowModal, month, day}) => {
  return (
    <div className={styles.fixedOverlay}>
      <div className={styles.modal}>
        <div className={styles.modal__container}>
          <div>
            <button
              className={styles.modal__buttonExit}
              onClick={() => setShowModal(false)}
            >
              &#215;
            </button>
          </div>
          <div className={styles.modal__inputs}>
            <InputComponent header='Month' data={month} />
            <InputComponent header='Day' data={day} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
