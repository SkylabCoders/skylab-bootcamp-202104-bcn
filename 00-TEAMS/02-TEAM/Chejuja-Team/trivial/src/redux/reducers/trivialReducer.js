import actionTypes from '../actions/actionTypes'

export default function loadGame(state=[], action){
    switch(action.type){
        case LOAD_GAME:
            return [...state, action.game]
            break;
            default:
                break;
            }
            return state


}