import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import store from './store/index'
import { Provider } from 'react-redux';
import FabButton from "./commons/Buttons/Fab";

ReactDOM.render(
   <Provider store={store}>
      <App />
      <FabButton />
   </Provider>,
   document.getElementById('root'));
