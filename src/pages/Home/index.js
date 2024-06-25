import React from "react";
import styles from "./styles.module.css";
import Header from "../../components/Header";
import Patients from "../../components/Patients";
import { usePatientsContext } from "../../contexts/PatientsContext";

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
        </div>
      )}
    </div>
  );
};

export default Home;
