
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from './reducers'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducers = persistReducer(persistConfig, reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducers, composeEnhancers(
    applyMiddleware(thunk)
));
const persistor = persistStore(store)

export { store, persistor }