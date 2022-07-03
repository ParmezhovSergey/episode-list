import { episodeApi } from "../api/api";

const FETCH_EPISODES = "FETCH_EPISODES";
const DELETE_EPISODES = "DELETE_EPISODES";
const DESCENDING_SORT = "FETCH_SORT";
const INCREASE_SORT = "INCREASE_SORT";
const MINUS_CLICK = "MINUS_CLICK";
const PLUS_CLICK = "PLUS_CLICK";

const initialState = {
  episodes: [],
};

const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODES:
      return {
        ...state,
        episodes: [
          ...action.episodes.map((i) => {
            i.charactersLength = i.characters.length;
            return i;
          }),
        ],
      };
    case DELETE_EPISODES:
      return {
        ...state,
        episodes: state.episodes.filter(
          (item) => action.id !== item.episode_id
        ),
      };

    case DESCENDING_SORT:
      return {
        ...state,
        episodes: [
          ...state.episodes.sort(
            (a, b) => b.charactersLength - a.charactersLength
          ),
        ],
      };
    case INCREASE_SORT:
      return {
        ...state,
        episodes: [
          ...state.episodes.sort(
            (a, b) => a.charactersLength - b.charactersLength
          ),
        ],
      };

    case MINUS_CLICK:
      return {
        ...state,
        episodes: [
          ...state.episodes.map((p) => {
            if (p.episode_id === action.id) {
              return { ...p, charactersLength: p.charactersLength - 1 };
            }
            return p;
          }),
        ],
      };
    case PLUS_CLICK:
      return {
        ...state,
        episodes: [
          ...state.episodes.map((p) => {
            if (p.episode_id === action.id) {
              return { ...p, charactersLength: p.charactersLength + 1 };
            }
            return p;
          }),
        ],
      };

    default:
      return state;
  }
};

const setFetchEpisodes = (episodes) => ({ type: FETCH_EPISODES, episodes });
const deleteEpisodes = (id) => ({ type: DELETE_EPISODES, id });
export const setDescendingSort = () => ({ type: DESCENDING_SORT });
export const setIncreaseSort = () => ({ type: INCREASE_SORT });
export const setMinusClick = (id) => ({ type: MINUS_CLICK, id });
export const setPlusClick = (id) => ({ type: PLUS_CLICK, id });

export const fetchEpisodes = () => {
  return async (dispatch) => {
    const response = await episodeApi.getEpisodes();
    dispatch(setFetchEpisodes(response.data));
  };
};

export const deleteEpisode = (id) => {
  return async (dispatch) => {
    dispatch(deleteEpisodes(id));
  };
};

export default episodesReducer;
