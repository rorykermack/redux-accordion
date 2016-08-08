import { createStore } from 'redux';
import rootReducer from './app/reducer';

const rootReducerPath = './app/reducer';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(rootReducerPath, () => {
      const nextReducer = require(rootReducerPath);
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
