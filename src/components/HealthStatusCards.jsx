import React from 'react';
import styles from '../styles/HealthStatusCards.module.css';
import { healthStatusCards } from '../data/healthData';

const HealthStatusCards = () => (
  <div className={styles.cardsContainer}>
    {healthStatusCards.map((card) => (
      <div key={card.id} className={styles.card}>
        <h4 className={styles.cardTitle}>{card.title}</h4>
        <p className={styles.cardDate}>Date: {card.date}</p>
        <span className={`${styles.status} ${styles[card.status]}`}></span>
      </div>
    ))}
  </div>
);

export default HealthStatusCards;
