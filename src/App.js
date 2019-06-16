import React from 'react';
import Router from './routers/router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer  from './reducer/root'
import  './assets/theme/App.less'

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
