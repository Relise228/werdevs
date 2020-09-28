import React from 'react';
import styles from './InputComponent.module.scss';

const InputComponent = ({header, data}) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputHeader}>{header}</div>
      <div className={styles.inputBlock}>
        <input className={styles.input} disabled value={data} />
      </div>
    </div>
  );
};

export default InputComponent;
