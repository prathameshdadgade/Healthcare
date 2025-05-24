import React from 'react';
import styles from '../styles/DashboardOverview.module.css';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';

const DashboardOverview = () => {
  return (
    <div className={styles.overviewGrid}>
      <AnatomySection />
      <CalendarView />
    </div>
  );
};

export default DashboardOverview;