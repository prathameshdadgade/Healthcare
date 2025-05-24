export const calendarAppointments = [
  { date: 26, times: [] },
  { date: 27, times: ['09:00', '11:00'] },
  { date: 28, times: ['13:00', '15:00'] },
  { date: 29, times: ['09:00'] },
  { date: 30, times: ['11:00', '14:00'] },
  { date: 31, times: ['10:00'] },
];

export const currentAppointments = [
  {
    id: 'dentist',
    title: 'Dentist',
    time: '09:00 - 11:00 AM',
    doctor: 'Dr. Cameron Williamson',
    icon: '🦷'
  },
  {
    id: 'physiotherapy',
    title: 'Physiotherapy Appointment',
    time: '09:00 - 11:00 AM',
    doctor: 'Dr. Kevin Djones',
    icon: '🤸'
  },
];

export const upcomingSchedule = [
  {
    day: 'Thursday',
    appointments: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: '🩺' },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' },
    ],
  },
  {
    day: 'Saturday',
    appointments: [
      { title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
      { title: 'Neurologist', time: '16:00 PM', icon: '🧠' },
    ],
  },
];
