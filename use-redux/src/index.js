import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import defaultReducer from './slice'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const statesStore = configureStore({
    reducer:defaultReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={statesStore}>
     <App />
  </Provider>
  
);


