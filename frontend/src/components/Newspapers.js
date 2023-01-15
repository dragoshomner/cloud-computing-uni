import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { Stack, Button, Grid } from "@mui/material";
import MediaCard from "./MediaCard";

export const Newspapers = () => {
  const navigate = useNavigate();
  const [newspapers, setNewspapers] = React.useState();

  React.useEffect(() => {
    getNewspapers();
  }, []);

  const getNewspapers = () => {
    axios.get(`${BASE_URL}/newspaper/all`).then((response) => {
      setNewspapers(response.data);
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
        <h1>Newspapers</h1>
        <Button
          variant="contained"
          onClick={() => navigate(`/newspaper/add`)}
          style={{ height: 40 }}
        >
          Add newspaper
        </Button>
      </Stack>
      <Grid container style={{ gap: 25 }} justifyContent="center">
        {newspapers &&
          newspapers.map((newspaper) => (
            <div key={newspaper.id}>
              <Grid item spacing={2}>
              <MediaCard
                title={newspaper.name}
                content={`Owner: ${newspaper.owner} - Since: ${newspaper.yearOfRelease}` }
                onButtonClick={() =>
                  navigate(`/newspaper/${newspaper.id}`, {
                    state: { newspaperName: newspaper.name },
                  })}
              />
              </Grid>
            </div>
          ))}
      </Grid>
    </div>
  );
};
