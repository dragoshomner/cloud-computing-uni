import React from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { Stack, Button, Grid } from "@mui/material";
import MediaCard from "./MediaCard";

export const NewspaperProfile = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { newspaperName: newspaperNameState } = state;
  const { newspaperId } = useParams();
  const [articles, setArticles] = React.useState();

  React.useEffect(() => {
    getNewspapers();
  }, []);

  const getNewspapers = () => {
    axios.get(`${BASE_URL}/newspaper/${newspaperId}/blogs`).then((response) => {
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
        <h1>{newspaperNameState} Profile</h1>
        {newspaperId > 1 && (
          <Button
            variant="contained"
            onClick={() =>
              navigate(`/newspaper/${newspaperId}/article/add`, {
                state: { newspaperName: newspaperNameState },
              })
            }
            style={{ height: 40 }}
          >
            Add article
          </Button>
        )}
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
                  onButtonClick={() =>
                    navigate(
                      `/newspaper/${article.newspaperId}/article/${article.id}`
                    )}
                />
            </Grid>
          </div>
        ))}
        </Grid>
    </div>
  );
};
