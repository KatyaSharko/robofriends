import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import './index.css';
import 'tachyons';
import { createLogger} from "redux-logger/src";
import App from './containers/App';
import { searchRobots, requestRobots } from "./reducers";
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots});

const Store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.createRoot(document.getElementById('root')).render(<Provider store={Store}><App /></Provider>);

