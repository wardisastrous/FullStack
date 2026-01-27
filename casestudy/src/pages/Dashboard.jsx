import { Container, Typography, Button, Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <Container sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Hospital Management Dashboard
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Manage patient records efficiently. Use the options below to add new
          patients or view existing patient history.
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/add"
          >
            Add Patient
          </Button>

          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/view"
          >
            View Patients
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Dashboard;
