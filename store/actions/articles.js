import { GET_ARTICLE_LIST, TOGGLE_LOADER } from './actionTypes';
import axios from 'axios';

// const gerArticleList = __ => dispatch => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(articles => {
//       dispatch({ type: GET_ARTICLE_LIST, articles });
//     });
// };

const gerArticleList = __ => dispatch => {
  dispatch({ type: TOGGLE_LOADER, load: true });
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.data)
    .then(articles => {
      dispatch({ type: GET_ARTICLE_LIST, articles });
    })
    .then(__ => {
      dispatch({ type: TOGGLE_LOADER, load: false });
    })
    .catch(__ => {
      dispatch({ type: TOGGLE_LOADER, load: false });
    });
};

export default gerArticleList;
