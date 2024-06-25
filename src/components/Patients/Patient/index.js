import React from "react";
import classes from "./styles.module.css";
import { HorizontalThreeDotsIcon } from "../../../assets/svgs";

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
          <p className="font-2 fw-bold">{name}</p>
          <p className="secondary-text font-2 fw-regular">
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
