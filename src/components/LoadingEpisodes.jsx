import { Card, Button } from "@mui/material";

export const LoadingEpisodes = (props) => {
  return (
    <Card
      sx={{
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button variant="contained" onClick={props.onGetEpisodesList}>
        Загрузить эпизоды
      </Button>
    </Card>
  );
};
