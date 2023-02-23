import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
// import Store ridux
import { Provider } from 'react-redux'

import store from './Redux/Store'
import { BrowserRouter } from "react-router-dom";

// import Store redux


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);