import React from "react";
import classes from "../styles.module.css";
import Graph from "./Graph";
import BloodPressureInfo from "./BloodPressureInfo";
import { DropDownIcon } from "../../../../assets/svgs";

const GraphSection = () => {
  return (
    <div className={classes.graphContainer}>
      <div>
        <div className="flex justify-between align-center mb-2">
          <h4>Blood Pressure</h4>
          <p className="font-2 fw-regular">
            Last 6 months
            <span
              style={{
                marginLeft: "1rem",
                marginBottom: "0.3rem",
                lineHeight: 0,
              }}
              className="pointer"
            >
              <DropDownIcon />
            </span>
          </p>
        </div>
        <div style={{ maxHeight: 300 }}>
          <Graph />
        </div>
      </div>
      <div>
        <BloodPressureInfo />
      </div>
    </div>
  );
};

export default GraphSection;
