import React, { useMemo } from "react";
import { monthsMap } from "../constants/monthsMap";

const useGraphData = ({ currentPatientData }) => {
  const diagnosisHistory = useMemo(() => {
    if (!currentPatientData?.diagnosis_history?.length) return [];

    return currentPatientData.diagnosis_history.slice(0, 6).reverse();
  }, [currentPatientData]);

  const labels = useMemo(() => {
    const diagnosisLabels = diagnosisHistory
      .slice(0, 6)
      .map(({ month, year }) => {
        const monthShortName = monthsMap[month];
        const formattedDate = `${monthShortName}, ${year}`;
        return formattedDate;
      });
    return diagnosisLabels;
  }, [diagnosisHistory]);

  const datasets = useMemo(() => {
    let diastolicData = {
      label: "Diastolic",
      borderColor: "#8C6FE6",
      backgroundColor: "#8C6FE6",
      data: [],
      cubicInterpolationMode: "monotone",
    };
    let systolicData = {
      label: "Systolic",
      borderColor: "#E66FD2",
      backgroundColor: "#E66FD2",
      data: [],
      cubicInterpolationMode: "monotone",
      // fill: false,
      // tension: 0.4,
    };
    for (let i = 0; i < diagnosisHistory.slice(0, 6).length; i++) {
      const {
        blood_pressure: { diastolic, systolic },
      } = diagnosisHistory[i];

      diastolicData.data = [...diastolicData.data, diastolic.value || NaN];
      systolicData.data = [...systolicData.data, systolic.value || NaN];
    }

    return [diastolicData, systolicData];
  }, [diagnosisHistory]);

  return { labels, datasets };
};

export default useGraphData;
