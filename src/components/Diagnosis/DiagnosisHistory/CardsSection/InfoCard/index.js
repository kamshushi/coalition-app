import React from "react";
import classes from "../../styles.module.css";
import { ArrowDownIcon, ArrowUpIcon } from "../../../../../assets/svgs";

const InfoCard = ({ icon: Icon, bgColor, title, value, levels }) => {
  return (
    <div
      className={classes.infoCardContainer}
      style={{ backgroundColor: bgColor || "unset" }}
    >
      <div className="mb-1">
        <Icon />
      </div>
      <p className="mb-sm font-3 fw-regular">{title}</p>
      <h4 className="mb-1 font-5 fw-boldest">{value}</h4>
      <p className="fw-regular font-2">
        {levels === "Lower than Average" ? (
          <span className="mr-sm">
            <ArrowDownIcon />
          </span>
        ) : levels === "Higher than Average" ? (
          <span className="mr-sm">
            <ArrowUpIcon />
          </span>
        ) : null}
        {levels || ""}
      </p>
    </div>
  );
};

export default InfoCard;
