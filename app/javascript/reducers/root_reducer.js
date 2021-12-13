import { combineReducers } from 'redux'
import kanjiReducer from './kanji_reducer';



const rootReducer = combineReducers({
    kanjis: kanjiReducer,
})

export default rootReducer;