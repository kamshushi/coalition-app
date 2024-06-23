import React from "react";
import styles from "./styles.module.css";

import LogoSection from "./LogoSection";
import NavItemsSection from "./NavItemsSection";
import ProfileSection from "./ProfileSection";

const Header = () => {
  return (
    <nav className={styles.container}>
      <LogoSection />
      <NavItemsSection />
      <ProfileSection />
    </nav>
  );
};

export default Header;
