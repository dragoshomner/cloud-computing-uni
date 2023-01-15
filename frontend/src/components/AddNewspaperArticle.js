import React from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { Stack, TextField, Button } from "@mui/material";

export const AddNewspaperArticle = () => {
  const navigate = useNavigate();
  const { state: currentState } = useLocation();
  const [article, setArticle] = React.useState();
  const { newspaperId } = useParams();

  const handleAddArticle = () => {
    axios
      .post(`${BASE_URL}/newspaper/${newspaperId}/blogs`, article)
      .then(() => {
        navigate(`/newspaper/${newspaperId}`, {
          state: { newspaperName: currentState.newspaperName },
        });
      });
  };

  return (
    <div>
      <h1>Add {currentState.newspaperName} Article</h1>
      <Stack direction="row" justifyContent="space-around" mt={2}>
        <TextField
          label="Title"
          variant="outlined"
          style={{ width: "50%", marginBottom: 10 }}
          onChange={(e) => setArticle({ ...article, title: e.target.value })}
        />
      </Stack>

      <Stack direction="row" justifyContent="space-around" mt={2}>
        <TextField
          label="Image URL"
          variant="outlined"
          style={{ width: "50%", marginBottom: 10 }}
          onChange={(e) => setArticle({ ...article, imageUrl: e.target.value })}
        />
      </Stack>

      <Stack direction="row" justifyContent="space-around" mt={2}>
        <TextField
          label="Content"
          variant="outlined"
          style={{ width: "50%", marginBottom: 10 }}
          onChange={(e) => setArticle({ ...article, content: e.target.value })}
        />
      </Stack>

      <Stack direction="row" justifyContent="center" alignItems="center" mt={2}>
        <Button
          variant="contained"
          onClick={handleAddArticle}
          style={{ height: 40 }}
        >
          Add article
        </Button>
      </Stack>
    </div>
  );
};
