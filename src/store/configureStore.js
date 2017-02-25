import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const middlewares = [thunkMiddleware]
if (process.env.NODE_ENV !== `production`) {
  const logger = createLogger({
    collapsed: (getState, action) => {
      return action
    }
  });
  middlewares.push(logger)
}

const middleware = applyMiddleware(...middlewares);

export default function configureStore(initialState) {
  const store = middleware(createStore)(rootReducer, initialState);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
