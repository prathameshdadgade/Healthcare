import React from 'react';
import styles from '../styles/Header.module.css';
import { FiSearch, FiBell, FiPlus } from 'react-icons/fi';
import useravtar from '../assets/img/user-avtar.png'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Healthcare.</div>
      <div className={styles.searchBar}>
        <FiSearch />
        <input type="text" placeholder="Search" aria-label="Search" />
      </div>
      <div className={styles.userInfo}>
        <div className={styles.notificationIcon}>
          <FiBell />
        </div>
        <div className={styles.profile}>
          <img src={useravtar} alt="User Avatar" className={styles.profileAvatar} />
        </div>
        <div className={styles.addButton}>
          <FiPlus />
        </div>
      </div>
    </header>
  );
};

export default Header;