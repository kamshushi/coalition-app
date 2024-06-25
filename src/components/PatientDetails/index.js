import React from "react";
import ContactInfo from "./ContactInfo";
import classes from "./styles.module.css";

const PatientDetails = () => {
  return (
    <div className={classes.container}>
      <ContactInfo />
    </div>
  );
};

export default PatientDetails;
