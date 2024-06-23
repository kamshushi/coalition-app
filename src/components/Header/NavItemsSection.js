import React from "react";
import styles from "./styles.module.css";
import {
  CalendarIcon1,
  HomeIcon,
  MessageIcon,
  PeopleIcon,
  TransactionsIcon,
} from "../../assets/svgs";

const NavItemsSection = () => {
  return (
    <div className={styles.navItemsContainer}>
      <a href="#" className={styles.navItem}>
        <HomeIcon /> <span>Overview</span>
      </a>
      <a href="#" className={`${styles.navItem} ${styles.active}`}>
        <PeopleIcon /> <span>Patients</span>
      </a>
      <a href="#" className={styles.navItem}>
        <CalendarIcon1 /> <span>Schedule</span>
      </a>
      <a href="#" className={styles.navItem}>
        <MessageIcon /> <span>Message</span>
      </a>
      <a href="#" className={styles.navItem}>
        <TransactionsIcon /> <span>Transactions</span>
      </a>
    </div>
  );
};

export default NavItemsSection;
