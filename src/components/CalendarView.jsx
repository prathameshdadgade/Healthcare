import React from 'react';
import styles from '../styles/CalendarView.module.css';
import { calendarAppointments, currentAppointments } from '../data/appointmentData';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CalendarView = () => {
  const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className={styles.calendarView}>
      <div className={styles.calendarHeader}>
        <h3 className={styles.monthYear}>October 2021</h3>
        <div className={styles.navArrows}>
          <div className={styles.navArrow}><FiChevronLeft /></div>
          <div className={styles.navArrow}><FiChevronRight /></div>
        </div>
      </div>
      <div className={styles.calendarGrid}>
        {daysOfWeek.map((day) => (
          <div key={day} className={styles.dayName}>{day}</div>
        ))}
        
        {Array.from({ length: 4 }).map((_, i) => <div key={`past-${i}`} className={styles.dateCell + ' ' + styles.pastMonth}></div>)}
        {dates.map((date) => {
          const dayAppointments = calendarAppointments.find(d => d.date === date);
          const isCurrentDay = date === 28; 
          return (
            <div key={date} className={`${styles.dateCell} ${isCurrentDay ? styles.currentDay : ''}`}>
              {date}
              {dayAppointments && dayAppointments.times.length > 0 && (
                <div className={styles.appointmentTimes}>
                  {dayAppointments.times.map((time, idx) => (
                    <span key={idx} className={styles.appointmentTime}>{time}</span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.appointmentDetails}>
        {currentAppointments.map((appt) => (
          <div key={appt.id} className={styles.appointmentCard}>
            <div className={styles.appointmentCardIcon}>{appt.icon}</div>
            <div className={styles.appointmentCardInfo}>
              <span className={styles.appointmentCardTitle}>{appt.title}</span>
              <span className={styles.appointmentCardTime}>{appt.time}</span>
              <span className={styles.appointmentCardDoctor}>{appt.doctor}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;