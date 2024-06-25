import { PatientsContextProvider } from "./contexts/PatientsContext";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <PatientsContextProvider>
        <Home />
      </PatientsContextProvider>
    </div>
  );
}

export default App;
