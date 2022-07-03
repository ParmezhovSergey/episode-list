import { Button, Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEpisodes,
  setDescendingSort,
  setIncreaseSort,
} from "../store/episodesReducer";
import EpisodeCard from "./EpisodeCard";
import { LoadingEpisodes } from "./LoadingEpisodes";

const EpisodeList = () => {
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episodes.episodes);

  const onGetEpisodesList = () => {
    dispatch(fetchEpisodes());
  };

  const Card = episodes.map((p) => (
    <EpisodeCard
      key={p.episode_id}
      episode={p.episode}
      episode_id={p.episode_id}
      characters={p.characters}
      charactersLength={p.charactersLength}
    />
  ));

  const descendingSort = () => {
    dispatch(setDescendingSort());
  };

  const increaseSort = () => {
    dispatch(setIncreaseSort());
  };

  return (
    <Container sx={{ textAlign: "center" }}>
      {episodes.length > 0 ? (
        <Container>
          <Button
            sx={{ margin: "20px 20px 0 0", maxWidth: "300px" }}
            variant="contained"
            onClick={descendingSort}
          >
            Сортировать по убыванию количества персонажей
          </Button>
          <Button
            sx={{ margin: "20px 0 0 0", maxWidth: "300px" }}
            variant="contained"
            onClick={increaseSort}
          >
            Сортировать по возрастанию количества персонажей
          </Button>
          <Grid container rowSpacing={2} spacing={2} marginTop={3}>
            {Card}
          </Grid>
        </Container>
      ) : (
        <LoadingEpisodes onGetEpisodesList={onGetEpisodesList} />
      )}
    </Container>
  );
};

export default EpisodeList;
