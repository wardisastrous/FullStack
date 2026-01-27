import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddPatient from "./pages/AddPatient";
import ViewPatients from "./pages/ViewPatients";

function App() {
  const [patients, setPatients] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/add"
          element={
            <AddPatient patients={patients} setPatients={setPatients} />
          }
        />
        <Route
          path="/view"
          element={<ViewPatients patients={patients} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
