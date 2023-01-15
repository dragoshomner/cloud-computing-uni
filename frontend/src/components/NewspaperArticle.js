import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { Stack, Typography } from "@mui/material";

export const NewspaperArticle = () => {
  const { newspaperId, articleId } = useParams();
  const [article, setArticle] = React.useState();

  React.useEffect(() => {
    getArticles();
  }, []);

  const getArticles = () => {
    axios
      .get(`${BASE_URL}/newspaper/${newspaperId}/blogs/${articleId}`)
      .then((response) => {
        setArticle(response.data);
      });
  };

  return (
    <div>
      <Stack direction="row" justifyContent="space-around" mt={2}>
        <h1>{article?.title}</h1>
      </Stack>
      {article && (
        <>
          <Stack direction="row" justifyContent="space-around">
            <img
              src={article.imageUrl}
              alt={article.title}
              style={{ maxWidth: 600 }}
            />
          </Stack>
          <Stack direction="row" justifyContent="space-around" mt={2}>
            <Typography variant="body1" gutterBottom style={{ maxWidth: 800 }}>
              {article?.content}
            </Typography>
          </Stack>
        </>
      )}
    </div>
  );
};
