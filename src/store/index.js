import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import state from './state';
import reducer from './reducer';

const store = createStore(reducer,state,applyMiddleware(thunk));
export default store;
