import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import masonry from './modules/masonry';

// const loggerMiddleware = createLogger(); // initialize logger

// const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore); // apply logger to redux

const reducer = combineReducers({
  masonry
});

// const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
const configureStore = createStore(
  reducer,
  applyMiddleware(logger)
)
export default () => configureStore;