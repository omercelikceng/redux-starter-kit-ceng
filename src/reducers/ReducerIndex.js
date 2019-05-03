import {combineReducers} from 'redux';
import {exampleReducer} from './SayacReducer';

export default combineReducers({
    exampleReducer : exampleReducer
})