import React from "react";
import styles from "./styles.module.css";
import Header from "../../components/Header";
import Patients from "../../components/Patients";
import { usePatientsContext } from "../../contexts/PatientsContext";
import Diagnosis from "../../components/Diagnosis";
import PatientDetails from "../../components/PatientDetails";

const Home = () => {
  const { loading } = usePatientsContext();
  return (
    <div className={styles.appContainer}>
      <Header />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.pageContentContainer}>
          <Patients />
          <Diagnosis />
          <PatientDetails />
        </div>
      )}
    </div>
  );
};

export default Home;
