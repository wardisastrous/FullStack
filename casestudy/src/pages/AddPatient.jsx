import { Container, Typography } from "@mui/material";
import PatientForm from "../components/PatientForm";

function AddPatient({ patients, setPatients }) {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5">Add Patient</Typography>
      <PatientForm patients={patients} setPatients={setPatients} />
    </Container>
  );
}

export default AddPatient;
