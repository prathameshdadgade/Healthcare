import React from 'react';
import styles from '../styles/AnatomySection.module.css';
import { anatomicalData, healthStatusCards } from '../data/healthData';
import Humanbody from '../assets/img/human-body.jpg';

const AnatomySection = () => {
  return (
    <div className={styles.anatomySection}>
      <div className={styles.anatomyHeader}>
        <h3 className={styles.sectionTitle}>Dashboard Overview</h3>
        <span className={styles.viewAll}>
          Details <span role="img" aria-label="arrow right">→</span>
        </span>
      </div>

      <div className={styles.humanBodyContainer}>
        <img
          src={Humanbody}
          alt="Human Body Anatomy"
          className={styles.humanBodyImage}
        />
        {anatomicalData.map((data) => (
          <div
            key={data.id}
            className={`${styles.healthIndicator} ${styles[data.status]} ${styles[`indicator${data.name.replace(/\s/g, '')}`]}`}
            style={{ top: data.position.top, left: data.position.left }}
          >
            <div className={`${styles.healthIndicatorIcon} ${styles[data.status]}`}></div>
            <span className={styles.healthIndicatorText}>{data.name}</span>
          </div>
        ))}
      </div>

      <div className={styles.healthCardsContainer}>
        {healthStatusCards.map((card) => (
          <div key={card.id} className={styles.healthCard}>
            <div className={styles.healthCardContent}>
              <span className={styles.healthCardTitle}>{card.title}</span>
              <span className={styles.healthCardDate}>Date: {card.date}</span>
            </div>
            <div className={`${styles.healthCardStatus} ${styles[card.status]}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
