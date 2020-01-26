import { put, takeEvery, call } from "redux-saga/effects"
import { FETCH_TODOS, FETCH_TODOS_SUCCESS, FETCH_TODOS_ERROR } from "./actionsType"

function* fetchTodos(action) {

    switch (action.type) {
        case FETCH_TODOS: {
            try {
                const response = yield call(fetch, "http://localhost:3000/todo", {
                    method: 'GET', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const result = yield response.json();
                const cardList = (result || {}).cardList ||[] 

                yield put({ type: FETCH_TODOS_SUCCESS, payload:  {cardList} });
            }
            catch (error) {
                yield put({ type: FETCH_TODOS_ERROR, error });
            }
            break;
        }
        default:
    }
}

function* todoSaga() {
    yield takeEvery(FETCH_TODOS, fetchTodos);
}

export default todoSaga;