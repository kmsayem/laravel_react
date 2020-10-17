import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as createHistory from "history";
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducers from '../redux/reducers';
import rootSaga from '../redux/sagas';
const history = createHistory.createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, sagaMiddleware, routeMiddleware, logger];

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  compose(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export { store, history };
