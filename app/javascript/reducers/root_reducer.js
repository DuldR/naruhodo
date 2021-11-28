import { combineReducers } from 'redux'
import kanjiReducer from './kanji_reducer';



const rootReducer = combineReducers({
    kanji: kanjiReducer,
})

export default rootReducer;