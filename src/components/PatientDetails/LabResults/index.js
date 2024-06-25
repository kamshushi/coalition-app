import React from "react";
import { usePatientsContext } from "../../../contexts/PatientsContext";
import classes from "./styles.module.css";
import { DownloadIcon } from "../../../assets/svgs";

const LabResults = () => {
  const { currentPatientData } = usePatientsContext();
  const { lab_results = [] } = currentPatientData || {};

  return (
    <section className={classes.sectionContainer}>
      <h3 className="mb-2 font-4 fw-bolder">Lab Results</h3>
      <div className={classes.resultsContainer}>
        {lab_results.map((result) => {
          return (
            <div key={result} className={classes.resultRow}>
              <p className="font-2 fw-regular">{result}</p>
              <div>
                <DownloadIcon />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LabResults;
