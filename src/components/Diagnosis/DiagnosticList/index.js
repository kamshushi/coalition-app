import React from "react";
import classes from "./styles.module.css";
import { usePatientsContext } from "../../../contexts/PatientsContext";

const DiagnosticList = () => {
  const { currentPatientData } = usePatientsContext();
  const { diagnostic_list = [] } = currentPatientData || {};
  return (
    <section className={classes.listContainer}>
      <h3 className="mb-2">Diagnostic List</h3>
      <div className={classes.tableContainer}>
        <table className={classes.customTable}>
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnostic_list.map((historyItem, i) => {
              const { description, name, status } = historyItem;
              return (
                <tr key={i}>
                  <td>{name}</td>
                  <td>{description}</td>
                  <td>{status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DiagnosticList;
