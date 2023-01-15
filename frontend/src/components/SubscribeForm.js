import React from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { Stack, TextField, Typography, Button } from "@mui/material";

export const SubscribeForm = () => {
  const [form, setForm] = React.useState("");

  const handleSubmit = () => {
    axios.post(`${BASE_URL}/subscribe`, form).then(() => {
      localStorage.setItem("subscribed", "true");
      window.location.reload();
    });
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-around" mt={2}>
        <Typography variant="h5" gutterBottom component="div">
          {" "}
          Be up to date with the last news!{" "}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-around" mt={2}>
        <TextField
          label="Email"
          variant="outlined"
          style={{ width: "50%", marginBottom: 10 }}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </Stack>

      <Stack direction="row" justifyContent="center" alignItems="center" mt={2}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{ height: 40 }}
        >
          Subscribe
        </Button>
      </Stack>
    </>
  );
};
