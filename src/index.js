import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import RotaliaRouter from './Containers/RotaliaRouter'

const store = configureStore()

const rootElement = document.getElementById('rotaliafoundation-body')

render(
  <Provider store={store}>
    <RotaliaRouter />
  </Provider>,
  rootElement
)
