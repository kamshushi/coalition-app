import React from "react";
import classes from "./styles.module.css";
import { SearchIcon } from "../../assets/svgs";
import { usePatientsContext } from "../../contexts/PatientsContext";
import PatientItem from "./Patient";

const Patients = () => {
  const { loading, patients } = usePatientsContext();
  return (
    <section className={classes.sectionContainer}>
      <div
        className={`flex justify-between align-center ${classes.headerContainer}`}
      >
        <h3>Patients</h3>
        <div className="pointer">
          <SearchIcon />
        </div>
      </div>
      <div className={classes.patientsListContainer}>
        {patients.map((patient) => {
          return <PatientItem patient={patient} />;
        })}
      </div>
    </section>
  );
};

export default Patients;
