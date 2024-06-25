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
        <p className="mb-sm">{label}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default InfoRow;
