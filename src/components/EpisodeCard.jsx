import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteEpisode,
  setMinusClick,
  setPlusClick,
} from "../store/episodesReducer";

const EpisodeCard = ({ charactersLength, episode_id, episode, quantity }) => {
  const dispatch = useDispatch();
  const onRemoveEpisode = () => {
    dispatch(deleteEpisode(episode_id));
  };

  const minusClick = () => {
    dispatch(setMinusClick(episode_id));
  };

  const plusClick = () => {
    dispatch(setPlusClick(episode_id));
  };

  return (
    <Grid item xs="6" sm="4" md="3">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Эпизод № {episode}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {charactersLength} персонаж
              {charactersLength > 1 ? "ей" : ""}
            </Typography>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  maxWidth: "30px",
                  maxHeight: "20px",
                }}
                variant="outlined"
                onClick={minusClick}
              >
                -
              </Button>
              <Button
                sx={{
                  maxWidth: "30px",
                  maxHeight: "20px",
                }}
                variant="outlined"
                onClick={plusClick}
              >
                +
              </Button>
            </CardActions>
            <Typography gutterBottom variant="h6" component="div">
              {}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {quantity}
            </Typography>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button variant="contained" onClick={onRemoveEpisode}>
                Удалить
              </Button>
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default EpisodeCard;
