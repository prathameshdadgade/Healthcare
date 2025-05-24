import React from 'react';
import styles from '../styles/Sidebar.module.css';
import { navigationLinks } from '../data/navigationData';
import * as RiIcons from 'react-icons/ri';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';

const iconComponents = {
  RiDashboardLine: RiIcons.RiDashboardLine,
  FaRegClock: FaIcons.FaRegClock,
  FaRegCalendarAlt: FaIcons.FaRegCalendarAlt,
  RiStethoscopeLine: RiIcons.RiStethoscopeLine,
  FiBarChart2: FiIcons.FiBarChart2,
  BiTestTube: BiIcons.BiTestTube,
  FiMessageSquare: FiIcons.FiMessageSquare,
  MdOutlineLiveHelp: MdIcons.MdOutlineLiveHelp,
  FiSettings: FiIcons.FiSettings,
};

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sectionTitle}>General</div>
      <nav>
        <ul className={styles.navList}>
          {navigationLinks.map((link, index) => {
            const IconComponent = iconComponents[link.icon];
            return (
              <li key={index} className={styles.navItem}>
                <a href="/Dashboard" className={`${styles.navLink} ${link.name === 'Dashboard' ? styles.active : ''}`}>
                  {IconComponent && <IconComponent />}
                  <span>{link.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
