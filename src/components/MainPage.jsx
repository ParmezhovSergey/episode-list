import { Container } from "@mui/system";
import React from "react";
import EpisodeList from "./EpisodeList";
import Header from "./Header";

const MainPage = (props) => {
  return (
    <div>
      <Header />
      <Container>
        <EpisodeList />
      </Container>
    </div>
  );
};

export default MainPage;
