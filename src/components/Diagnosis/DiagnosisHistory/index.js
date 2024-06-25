import React from "react";
import classes from "./styles.module.css";
import GraphSection from "./GraphSection";

const DiagnosisHistory = () => {
  return (
    <section className={classes.sectionContainer}>
      <h3 className="mb-2">Diagnosis History</h3>
      <div className={classes.statisticsContainer}>
        <GraphSection />
      </div>
    </section>
  );
};

export default DiagnosisHistory;
