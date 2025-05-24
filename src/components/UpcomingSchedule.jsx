import React from 'react';
import styles from '../styles/UpcomingSchedule.module.css';
import { upcomingSchedule } from '../data/appointmentData';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
    <div className={styles.upcomingSchedule}>
      <h3 className={styles.sectionTitle}>The Upcoming Schedule</h3>
      {upcomingSchedule.map((dayData, index) => (
        <div key={index} className={styles.daySection}>
          <h4 className={styles.dayTitle}>On {dayData.day}</h4>
          <div className={styles.appointmentsList}>
            {dayData.appointments.map((appt, idx) => (
              <SimpleAppointmentCard
                key={idx}
                title={appt.title}
                time={appt.time}
                icon={appt.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;