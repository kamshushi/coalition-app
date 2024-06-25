import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { usePatientsContext } from "../../../../../contexts/PatientsContext";
import useGraphData from "../../../../../hooks/useGraphData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "bottom",
    },
    // title: {
    //   display: true,
    //   text: "Blood Pressure",
    // },
  },
};

const Graph = () => {
  const { currentPatientData } = usePatientsContext();

  const { datasets, labels } = useGraphData({ currentPatientData });

  const data = useMemo(() => {
    return {
      labels,
      datasets,
    };
  }, [labels, datasets]);

  return <Line options={options} data={data} />;
};

export default Graph;
