import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import user from './reducers/userReduser'


export default createStore(combineReducers(
    {
      user
    }
  ),
  {},
  applyMiddleware(/*logger(),*/ thunk/*, promise()*/)
); // {name: reducer}