import {combineReducers} from 'redux'
import trivialReducer from '../reducers/trivialReducer'

const rootReducer = combineReducers({
    gameData: trivialReducer,
})

export default rootReducer