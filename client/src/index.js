import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./global.css"

import { Provider } from 'react-redux';
import { reducers } from "./redux/reducers"
import thunk from "redux-thunk"
import {BrowserRouter} from "react-router-dom"
import { createStore, applyMiddleware, compose} from "redux"
import {GoogleOAuthProvider} from "@react-oauth/google"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <GoogleOAuthProvider
                clientId={`327371261340-e6b8fgk990bdqqnits8kr97vg62r9osa.apps.googleusercontent.com`}>
       <App />
       </GoogleOAuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
