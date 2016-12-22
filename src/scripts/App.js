import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Main from './containers/Main'
import reducers from './reducers/reducers'
import './app.sass'

injectTapEventPlugin()

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), /* eslint no-underscore-dangle: off, max-len: off */
  applyMiddleware(thunk),
)
const rootEl = document.getElementById('root')

render(
  <AppContainer>
    <Provider store={store}>
      <Main />
    </Provider>
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./containers/Main', () => {
    const Main = require('./containers/Main').default
    render(
      <AppContainer>
        <Provider store={store}>
          <Main />
        </Provider>
      </AppContainer>,
      rootEl
    )
  })
}
