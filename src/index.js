import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import { Provider } from 'react-redux'
import Toastr from '../src/components/Toastr'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toastr />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

