import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import App from './containers/app'
import { Provider } from 'react-redux'

import store from './storage'

/*defaultStates = {
  data: []
}*/





render(
  <Provider store={store} >
    <App />
  </Provider>
  ,root)