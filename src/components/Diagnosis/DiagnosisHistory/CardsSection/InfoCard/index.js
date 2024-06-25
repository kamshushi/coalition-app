import React from "react";
import classes from "../../styles.module.css";
import ArrowDownIcon from "../../../../../assets/svgs/LowerIcon";
import ArrowUpIcon from "../../../../../assets/svgs/ArrowUpIcon";

const InfoCard = ({ icon: Icon, bgColor, title, value, levels }) => {
  return (
    <div
      className={classes.infoCardContainer}
      style={{ backgroundColor: bgColor || "unset" }}
    >
      <div className="mb-1">
        <Icon />
      </div>
      <p className="mb-sm">{title}</p>
      <h4 className="mb-2">{value}</h4>
      <p>
        <span className="mr-sm">
          {levels === "Lower than Average" ? (
            <ArrowDownIcon />
          ) : levels === "Higher than Average" ? (
            <ArrowUpIcon />
          ) : null}
        </span>
        {levels || ""}
      </p>
    </div>
  );
};

export default InfoCard;
