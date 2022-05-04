import { Grid } from "@material-ui/core";
import { useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import MenuGenre from "../components/MenuGenre";
import Page from "../components/Page";
import Title from "../components/Title";
import VideoList from "../components/Video/VideoList";

type Props = {};
const VideosByCategory = (props: Props) => {
  const location = useLocation();
  const { pathname } = location;
  const history = useHistory();
  const queryParams = new URLSearchParams(location.search);
  const genreIdInit = queryParams.get("genre-id") || "0";
  const [genreIdSelected, setGenreIdSelected] = useState(genreIdInit);
  const onGenreSelected = useCallback((genreId) => {
    setGenreIdSelected(genreId);
  }, []);

  useEffect(() => {
    if (genreIdInit === genreIdSelected) {
      return;
    }
    history.push({
      pathname,
      ...(genreIdSelected !== "0" && {
        search: `?genre-id=${genreIdSelected}`,
      }),
    });
  }, [history, genreIdInit, genreIdSelected, pathname]);

  return (
    <Page margin="large">
      <Grid container>
        <Grid item xs={7} sm={9}>
          <Title>Filme</Title>
        </Grid>
        <Grid
          item
          xs={5}
          sm={3}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <MenuGenre
            genreIdInit={genreIdInit}
            onGenreSelected={onGenreSelected}
          />
        </Grid>
      </Grid>
      <VideoList videos={[]} />
    </Page>
  );
};

export default VideosByCategory;
