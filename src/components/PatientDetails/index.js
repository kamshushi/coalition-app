import React from "react";
import ContactInfo from "./ContactInfo";
import classes from "./styles.module.css";
import LabResults from "./LabResults";

const PatientDetails = () => {
  return (
    <div className={classes.container}>
      <ContactInfo />
      <LabResults />
    </div>
  );
};

export default PatientDetails;
