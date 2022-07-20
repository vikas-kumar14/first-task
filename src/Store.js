import { createStore, applyMiddleware, compose } from 'redux';
import MainReducer from './reducer/Mainreducer';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const MyStore = createStore(MainReducer, composeEnhancer(applyMiddleware(thunk)));

export default MyStore;