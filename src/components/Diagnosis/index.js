import React from "react";
import DiagnosisHistory from "./DiagnosisHistory";
import DiagnosticList from "./DiagnosticList";
import classes from "./styles.module.css";
const Diagnosis = () => {
  return (
    <div className={classes.container}>
      <DiagnosisHistory />
      <DiagnosticList />
    </div>
  );
};

export default Diagnosis;
