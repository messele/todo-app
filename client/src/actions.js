import {ADD_CARD, REMOVE_CARD} from "./actionsType";

let nextId = 100;


export const addCard =  status => {

    return {
        type: ADD_CARD,
        payload: {
            id : nextId++,
            status
        }
    };
};

export const removeCard =  id => {
    return {
        type: REMOVE_CARD,
        payload: {
           id
        }
    };
};