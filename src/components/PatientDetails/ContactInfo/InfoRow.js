import React from "react";
import classes from "./styles.module.css";
import { usePatientsContext } from "../../../contexts/PatientsContext";

const InfoRow = ({ icon: Icon, label, value }) => {
  return (
    <div className={classes.itemRowContainer}>
      <div>
        <Icon />
      </div>
      <div>
        <p className="mb-sm font-2 fw-regular">{label}</p>
        <p className="font-2 fw-bold">{value}</p>
      </div>
    </div>
  );
};

export default InfoRow;
