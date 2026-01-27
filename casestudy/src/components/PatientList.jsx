import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
} from "@mui/material";

function PatientList({ patients }) {
  const [searchName, setSearchName] = useState("");

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <>
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          label="Search Patient by Name"
          placeholder="Enter patient name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </Box>

      {filteredPatients.length === 0 ? (
        <Typography>No patient records found.</Typography>
      ) : (
        filteredPatients.map((p, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Typography><strong>Name:</strong> {p.name}</Typography>
              <Typography><strong>Age:</strong> {p.age}</Typography>
              <Typography><strong>Gender:</strong> {p.gender}</Typography>
              <Typography><strong>Disease:</strong> {p.disease}</Typography>
              <Typography><strong>Treatment:</strong> {p.treatment}</Typography>
              <Typography><strong>Last Visit:</strong> {p.lastVisit}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </>
  );
}

export default PatientList;
