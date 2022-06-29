import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProvider} from "./store/state-provider";
import reducer, {initialState} from "./store/reducer";
import {ThemeProvider} from '@mui/styles';
import {theme} from './theme';
import {AuthProvider} from './store/auth-provider';
import {Store} from './store/redux/store';
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={
            reducer
        }>
            <AuthProvider>
                <Provider store={Store}>
                    <ThemeProvider theme={theme}>
                        <App/>
                    </ThemeProvider>
                </Provider>
            </AuthProvider>
        </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

