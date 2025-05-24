import React from 'react';
import styles from '../styles/ActivityFeed.module.css';
import { activityData } from '../data/activityData';

const ActivityFeed = () => {
  return (
    <div className={styles.activityFeed}>
      <div className={styles.activityHeader}>
        <h3 className={styles.sectionTitle}>Activity</h3>
        <span className={styles.activitySummary}>3 appointments this week</span>
      </div>
      <div className={styles.barChart}>
        {activityData.map(({ day, height, color }) => (
          <div key={day} className={styles.barColumn}>
            <div
              className={styles.bar}
              style={{
                height: height,
                backgroundColor: color === 'dark' ? 'var(--primary-blue)' : 'var(--light-blue)',
              }}
            />
            <span className={styles.barDay}>{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
