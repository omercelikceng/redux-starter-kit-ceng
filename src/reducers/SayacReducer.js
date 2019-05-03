import * as types from '../actions/ActionTypes';

const defaultState = {
    sayac:0
}

export function exampleReducer( state = defaultState, action){
    switch(action.type){
        case types.SAYAC_ARTTIR:
        return {sayac:action.data};
        default:
        return state;
    }
}