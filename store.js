import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer} from './reducer';
import { rootSaga } from './saga/rootsaga';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]
const store = createStore(
    reducer,
    {},
    applyMiddleware(...middleware)
    )
    
    sagaMiddleware.run(rootSaga);


export default store;

