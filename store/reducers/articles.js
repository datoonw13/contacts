import { GET_ARTICLE_LIST } from '../actions/actionTypes';

const initialState = {
  articles: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLE_LIST:
      return {
        ...state,
        articles: action.articles
      };
    default:
      return state;
  }
}
