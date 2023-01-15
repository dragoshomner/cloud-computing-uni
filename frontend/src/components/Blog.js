import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { Stack, Button, Grid } from "@mui/material";
import MediaCard from "./MediaCard";

export const Blog = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = React.useState();

  React.useEffect(() => {
    getArticles();
  }, []);

  const getArticles = () => {
    axios.get(`${BASE_URL}/blog`).then((response) => {
      setArticles(response.data);
    });
  };

  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        px={2}
      >
        <h1>Blog</h1>
        <Button
          variant="contained"
          onClick={() => navigate(`/blog/add`)}
          style={{ height: 40 }}
        >
          Add article
        </Button>
      </Stack>

      <Grid container style={{ gap: 25 }} justifyContent="center">
        {articles &&
          articles.map((article) => (
            <div key={article.id}>
              <Grid item spacing={2}>
                <MediaCard
                  title={article.title}
                  content={article.content}
                  imageUrl={article.imageUrl}
                  onButtonClick={() => navigate(`/article/${article.id}`)}
                />
              </Grid>
            </div>
          ))}
      </Grid>
    </div>
  );
};
