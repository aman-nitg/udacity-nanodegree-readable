import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = []
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}
middlewares.push(sagaMiddleware)

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
)
sagaMiddleware.run(rootSaga)

export default store