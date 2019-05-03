import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/ReducerIndex';


export default function ConfigureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}