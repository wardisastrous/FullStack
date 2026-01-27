import { Container, Typography, Paper } from "@mui/material";
import PatientList from "../components/PatientList";

function ViewPatients({ patients }) {
  return (
    <Container sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Patient Records
        </Typography>

        <PatientList patients={patients} />
      </Paper>
    </Container>
  );
}

export default ViewPatients;
