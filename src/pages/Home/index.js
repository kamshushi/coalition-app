import React from "react";
import styles from "./styles.module.css";
import Header from "../../components/Header";
import Patients from "../../components/Patients";

const Home = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.pageContentContainer}>
        <Patients />
      </div>
    </div>
  );
};

export default Home;
