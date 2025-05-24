import React from 'react';
import styles from '../styles/SimpleAppointmentCard.module.css';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className={styles.simpleAppointmentCard}>
      <div className={styles.appointmentInfo}>
        <span className={styles.appointmentTitle}>{title}</span>
        <span className={styles.appointmentTime}>{time}</span>
      </div>
      <div className={styles.appointmentIcon}>{icon}</div>
    </div>
  );
};

export default SimpleAppointmentCard;