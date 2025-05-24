import React from 'react';
import styles from '../styles/DashboardMainContent.module.css';
import { FiChevronDown } from 'react-icons/fi';
import DashboardOverview from './DashboardOverview';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <main className={styles.mainContent}>
      <div className={styles.dashboardHeader}>
        <h2 className={styles.dashboardTitle}>Dashboard</h2>
        <div className={styles.thisWeekDropdown}>
          <span>This Week</span>
          <FiChevronDown />
        </div>
      </div>
      <DashboardOverview />
      <UpcomingSchedule />
      <ActivityFeed />
    </main>
  );
};

export default DashboardMainContent;