import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { Stack, TextField, Button } from "@mui/material";

export const AddNewspaper = () => {
  const navigate = useNavigate();
  const [newspaper, setNewspaper] = React.useState();

  const handleAddNewspaper = () => {
    axios.post(`${BASE_URL}/newspaper`, newspaper).then(() => {
      navigate(`/newspapers`);
    });
  };

  return (
    <div>
      <h1>Add Newspaper</h1>
      <Stack direction="row" justifyContent="space-around" mt={2}>
        <TextField
          label="Name"
          variant="outlined"
          style={{ width: "50%", marginBottom: 10 }}
          onChange={(e) => setNewspaper({ ...newspaper, name: e.target.value })}
        />
      </Stack>
      
      <Stack direction="row" justifyContent="space-around" mt={2}>
        <TextField
          label="Owner"
          variant="outlined"
          style={{ width: "50%", marginBottom: 10 }}
          onChange={(e) => setNewspaper({ ...newspaper, owner: e.target.value })}
        />
      </Stack>
      
      <Stack direction="row" justifyContent="space-around" mt={2}>
        <TextField
          label="Year of release"
          variant="outlined"
          type="number"
          style={{ width: "50%", marginBottom: 10 }}
          onChange={(e) => setNewspaper({ ...newspaper, yearOfRelease: e.target.value })}
        />
      </Stack>
      
      <Stack direction="row" justifyContent="center" alignItems="center" mt={2}>
        <Button
          variant="contained"
          onClick={handleAddNewspaper}
          style={{ height: 40 }}
        >
          Add Newspaper
        </Button>
      </Stack>
    </div>
  );
};
