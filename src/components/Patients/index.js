import React from "react";
import classes from "./styles.module.css";
import { SearchIcon } from "../../assets/svgs";

const Patients = () => {
  return (
    <section className={classes.sectionContainer}>
      <div className={`flex justify-between align-center mb-`}>
        <h3>Patients</h3>
        <div>
          <SearchIcon />
        </div>
      </div>
      <div className={classes.patientsListContainer}></div>
    </section>
  );
};

export default Patients;
