import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from "react-redux";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import rootReducer from "./redux/reducers";

const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
)
