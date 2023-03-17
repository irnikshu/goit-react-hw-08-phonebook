import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { store, persistor } from './redux/store';
import {store, persistor} from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';

import AuthLayout from './components/AuthLayout/AuthLayout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
        <AuthLayout>
       <BrowserRouter>
        <App />
          </BrowserRouter>
          </AuthLayout>
        </PersistGate> 
  </Provider> 
  </React.StrictMode> 
);