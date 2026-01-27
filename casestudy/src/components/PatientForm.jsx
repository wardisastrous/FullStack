import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Paper,
  Typography,
} from "@mui/material";

function PatientForm({ patients, setPatients }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    disease: "",
    treatment: "",
    lastVisit: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.age ||
      !form.gender ||
      !form.disease ||
      !form.treatment ||
      !form.lastVisit
    ) {
      alert("Please fill all fields");
      return;
    }

    setPatients([...patients, form]);

    alert("Patient added successfully!");

    setForm({
      name: "",
      age: "",
      gender: "",
      disease: "",
      treatment: "",
      lastVisit: "",
    });
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Patient Details
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Patient Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Age"
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Gender"
          name="gender"
          value={form.gender}
          onChange={handleChange}
          margin="normal"
          placeholder="Male / Female / Other"
        />

        <TextField
          fullWidth
          label="Disease"
          name="disease"
          value={form.disease}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Treatment Given"
          name="treatment"
          value={form.treatment}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Last Visit Date"
          type="date"
          name="lastVisit"
          InputLabelProps={{ shrink: true }}
          value={form.lastVisit}
          onChange={handleChange}
          margin="normal"
        />

        <Button
          variant="contained"
          type="submit"
          sx={{ mt: 3 }}
        >
          Add Patient
        </Button>
      </Box>
    </Paper>
  );
}

export default PatientForm;
