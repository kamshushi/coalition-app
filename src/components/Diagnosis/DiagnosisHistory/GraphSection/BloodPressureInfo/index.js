import React from "react";
import classes from "../../styles.module.css";
import { usePatientsContext } from "../../../../../contexts/PatientsContext";
import { ArrowUpIcon, ArrowDownIcon } from "../../../../../assets/svgs";

const BloodPressureInfo = () => {
  const { currentPatientData } = usePatientsContext();
  const latestMonthData = currentPatientData?.diagnosis_history?.[0] || {};
  const { blood_pressure } = latestMonthData;

  return (
    <div>
      <div>
        <div className="flex align-center mb-sm" style={{ gap: "0.5rem" }}>
          <div className={classes.systolicDot}></div>
          <p className="font-2 fw-bold">Systolic</p>
        </div>
        <h4 className="mb-sm font-4 fw-bold">
          {blood_pressure?.systolic?.value}
        </h4>
        <p className="fw-regular font-2">
          {blood_pressure?.systolic?.levels === "Lower than Average" ? (
            <span className="mr-sm">
              <ArrowDownIcon />
            </span>
          ) : blood_pressure?.systolic?.levels === "Higher than Average" ? (
            <span className="mr-sm">
              <ArrowUpIcon />
            </span>
          ) : null}

          {blood_pressure?.systolic?.levels || ""}
        </p>
      </div>
      <hr className="mt-2 mb-2" />
      <div>
        <div className="flex align-center mb-sm" style={{ gap: "0.5rem" }}>
          <div className={classes.diastolicDot}></div>
          <p className="font-2 fw-bold">Diastolic</p>
        </div>
        <h4 className="mb-sm font-4 fw-bold">
          {blood_pressure?.diastolic?.value}
        </h4>
        <p className="fw-regular font-2">
          <span style={{ marginRight: "0.5rem" }}>
            {blood_pressure?.diastolic?.levels === "Lower than Average" ? (
              <ArrowDownIcon />
            ) : blood_pressure?.diastolic?.levels === "Higher than Average" ? (
              <ArrowUpIcon />
            ) : null}
          </span>
          {blood_pressure?.diastolic?.levels || ""}
        </p>
      </div>
    </div>
  );
};

export default BloodPressureInfo;
