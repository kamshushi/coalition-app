import { createContext, useContext, useEffect, useMemo, useState } from "react";

const patientsContextInitialValues = {
  loading: false,
  patients: [],
};
const PatientsContext = createContext(patientsContextInitialValues);

const API_ENDPOINT = "https://fedskillstest.coalitiontechnologies.workers.dev";

export const PatientsContextProvider = ({ children, ...props }) => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const username = "coalition";
        const password = "skills-test";
        const auth = btoa(`${username}:${password}`);
        const res = await fetch(API_ENDPOINT, {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        });
        const data = await res.json();
        console.log({ data });
        setPatients(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const value = useMemo(() => {
    return {
      patients,
      loading,
    };
  }, [patients, loading]);

  return (
    <PatientsContext.Provider value={value} {...props}>
      {children}
    </PatientsContext.Provider>
  );
};

export const usePatientsContext = () => {
  return useContext(PatientsContext);
};

export default PatientsContext;
