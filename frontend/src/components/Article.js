import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { Stack, Typography } from "@mui/material";
import { DividerStack } from "./DividerStack";

export const Article = () => {
  const [article, setArticle] = React.useState();
  const { articleId } = useParams();

  React.useEffect(() => {
    getArticle();
  }, []);

  const getArticle = () => {
    axios.get(`${BASE_URL}/blog/${articleId}`).then((response) => {
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
            <DividerStack
              items={[
                `Critics prizes: ${article.numberOfLikes}`,
                `Contest attendances: ${article.numberOfViews}`,
                `Shares: ${article.numberOfShares}`,
              ]}
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
