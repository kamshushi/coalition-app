import React from "react";
import InfoCard from "./InfoCard";
import LungsIcon from "../../../../assets/svgs/LungsIcon";
import { usePatientsContext } from "../../../../contexts/PatientsContext";
import TempratureIcon from "../../../../assets/svgs/TempratureIcon";
import HeartIcon from "../../../../assets/svgs/HeartIcon";

const CardsSection = () => {
  const { currentPatientData } = usePatientsContext();
  const latestMonthData = currentPatientData?.diagnosis_history?.[0] || {};
  const { heart_rate, respiratory_rate, temperature } = latestMonthData;

  return (
    <>
      <InfoCard
        bgColor="#E0F3FA"
        icon={LungsIcon}
        title="Respiratory Rate"
        value={`${respiratory_rate?.value} bpm`}
        levels={respiratory_rate?.levels}
      />
      <InfoCard
        bgColor="#FFE6E9"
        icon={TempratureIcon}
        title="Temprature"
        value={`${temperature?.value} °F`}
        levels={temperature?.levels}
      />
      <InfoCard
        bgColor="#FFE6F1"
        icon={HeartIcon}
        title="Heart Rate"
        value={`${heart_rate?.value} bpm`}
        levels={heart_rate?.levels}
      />
    </>
  );
};

export default CardsSection;
