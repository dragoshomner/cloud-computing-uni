import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

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
      <h1>Newspapers</h1>
      {newspapers &&
        newspapers
          .map((newspaper) => (
            <div key={newspaper.id}>
              <h2
                onClick={() =>
                  navigate(`/newspaper/${newspaper.id}`, {
                    state: { newspaperName: newspaper.name },
                  })
                }
              >
                {newspaper.name}
              </h2>
            </div>
          ))}
    </div>
  );
};
