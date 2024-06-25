import React from "react";
import classes from "./styles.module.css";
import { usePatientsContext } from "../../../contexts/PatientsContext";

const DiagnosticList = () => {
  const { currentPatientData } = usePatientsContext();
  const { diagnostic_list = [] } = currentPatientData || {};
  return (
    <section className={classes.listContainer}>
      <h3 className="mb-2">Diagnosis History</h3>
      <div className={classes.tableContainer}>
        <table className={classes.customTable}>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
          {diagnostic_list.map((historyItem) => {
            const { description, name, status } = historyItem;
            return (
              <tr>
                <td>{name}</td>
                <td>{description}</td>
                <td>{status}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </section>
  );
};

export default DiagnosticList;
