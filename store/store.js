import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import articlesRducer from './reducers/articles';
import loaderRducer from './reducers/loader';

const rootReducer = combineReducers({
  articles: articlesRducer,
  loader: loaderRducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
