import React from "react";
import classes from "./styles.module.css";
import profileImg from "../../assets/images/profile-picture.png";
import { GearIcon, ThreeDotsIcon } from "../../assets/svgs";

const ProfileSection = () => {
  return (
    <div className={classes.profileContainer}>
      <div>
        <img
          className={classes.profileIcon}
          src={profileImg}
          alt="profile-image"
        />
      </div>
      <div className={classes.profileInfoContainer}>
        <p>Dr.Jose Simmons</p>
        <p className="secondary-text">General Practitioner</p>
      </div>
      <div className={classes.separator}></div>
      <div className={classes.profileIconsContainer}>
        <span>
          <GearIcon />
        </span>
        <span>
          <ThreeDotsIcon />
        </span>
      </div>
    </div>
  );
};

export default ProfileSection;
