import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { TextField, Stack, Checkbox, Button } from "@mui/material";

export const AddBlogArticle = () => {
  const navigate = useNavigate();
  const [article, setArticle] = React.useState({ isPublic: false });

  const handleAddArticle = () => {
    axios.post(`${BASE_URL}/blog`, article).then(() => {
      navigate(`/`);
    });
  };
  return (
    <div>
      <h1>Add Blog Article</h1>
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
          label="Content"
          variant="outlined"
          style={{ width: "50%", marginBottom: 10 }}
          onChange={(e) => setArticle({ ...article, imageUrl: e.target.value })}
        />
      </Stack>

      <Stack direction="row" justifyContent="space-around" mt={2}>
        <TextField
          label="Image URL"
          variant="outlined"
          style={{ width: "50%", marginBottom: 10 }}
          onChange={(e) => setArticle({ ...article, content: e.target.value })}
        />
      </Stack>

      <Stack direction="row" justifyContent="center" alignItems="center" mt={2}>
        <Checkbox
          onChange={(e) =>
            setArticle({
              ...article,
              isPublic: e.target.checked,
            })
          }
        />
        <span style={{ marginBottom: 4 }}> Publish in newspaper </span>
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
