import axios from "axios";

const instance = axios.create({
  baseURL: "https://breakingbadapi.com/api/episodes",
});

export const episodeApi = {
  getEpisodes() {
    return instance.get("");
  },
};
