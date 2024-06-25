import React from "react";
import classes from "./styles.module.css";
import HorizontalThreeDotsIcon from "../../../assets/svgs/HorizontalThreeDotsIcon";

const PatientItem = ({ patient }) => {
  const { profile_picture, age, gender, name } = patient;

  const isJessicaTaylor = name === "Jessica Taylor";

  return (
    <div
      className={`${classes.container} ${
        isJessicaTaylor ? classes.active : ""
      }`}
    >
      <div className={classes.patientInfo}>
        <img
          src={profile_picture}
          alt="patient-name"
          className={classes.patientImg}
        />
        <div>
          <p>{name}</p>
          <p className="secondary-text">
            {gender}, {age}
          </p>
        </div>
      </div>
      <div className={classes.svgContainer}>
        <HorizontalThreeDotsIcon />
      </div>
    </div>
  );
};

export default PatientItem;
