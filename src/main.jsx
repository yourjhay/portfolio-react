import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
let root = document.getElementById('root');
if(root) {
    // 1. Set up the browser history with the updated location
    // (minus the # sign)
    const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
    if (path) {
      history.replace(path);
    }
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}