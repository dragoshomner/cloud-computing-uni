import React from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { Stack, TextField, Button, Alert } from "@mui/material";

export const Contact = () => {
  const [form, setForm] = React.useState({});

  const handleContact = () => {
    const sendObject = {
        email: form.email,
        message: form.message
    };
    axios.post(`${BASE_URL}/contact`, sendObject).then(() => {
        setForm({
            email: "",
            message: "",
            alertMessage: "Message sent successfully!"
        });
    });
  };

  return (
    <div>
      <h1>Send Message</h1>

      {form.alertMessage && (
        <Stack direction="row" justifyContent="space-around" mt={2}>
          <Alert severity="success">{form.alertMessage}</Alert>
        </Stack>
      )}

      <Stack direction="row" justifyContent="space-around" mt={2}>
        <TextField
          label="Your Email"
          variant="outlined"
          style={{ width: "50%", marginBottom: 10 }}
          required
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
      </Stack>

      <Stack direction="row" justifyContent="space-around" mt={2}>
        <TextField
          label="Message"
          variant="outlined"
          style={{ width: "50%", marginBottom: 10 }}
          required
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />
      </Stack>

      <Stack direction="row" justifyContent="center" alignItems="center" mt={2}>
        <Button
          variant="contained"
          onClick={handleContact}
          style={{ height: 40 }}
        >
          Send
        </Button>
      </Stack>
    </div>
  );
};
