import { ADD_CARD, REMOVE_CARD,FETCH_TODOS_SUCCESS, FETCH_TODOS_ERROR } from "../actionsType";
//import { STATUS } from "../status";
import _ from 'lodash'

const initialState = {
    cardList: []
};


function todo(state = initialState, action) {
    if (action) {
        switch (action.type) {

            case ADD_CARD: {
                const { id, status } = action.payload;
                // console.log("* IN REDUCER : " + id);
                return {
                    cardList: [
                        ...state.cardList,
                        {
                            id: id,
                            title: "NEW TASK",
                            status,
                            tasks: []
                        }

                    ]
                }
            }
            case REMOVE_CARD: {
                const {id} = action.payload;
                console.log("*  REMOVING : " + id)
                let newState = _.cloneDeep(state);
                 _.remove(newState.cardList, x => x.id === id)
                console.log("* AFTER REMOVING : " + JSON.stringify(newState))
                return newState;

            }
            case FETCH_TODOS_SUCCESS: {
                console.log("TODOS FETCHED....");
                return {
                    cardList: [
                        ...state.cardList,
                        ...action.payload.cardList
                    ]
                }
            }
            case FETCH_TODOS_ERROR: {
                console.log("ERROR : " + action.error)
                return state;
            }
            default:
                return state;
        }


    }
    return state;
}
export default todo;