import {Platform } from 'react-native';  //for remote dev tools 
import {
    createStore,  //will pass to <Provider>
    applyMiddleware,
    compose
} from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './Reducers';

const middleware = applyMiddleware (thunk, promise, logger);

const Store = createStore( //reducer & preloaded state & enhancer
    RootReducer,
    compose(  //Composes functions from right to left.
        middleware,  //for thunk , promise and logger
        devTools({
            name: Platform.OS,
            hostname:'localhost',
            port: 5678
        }),
    )
);

export default Store;